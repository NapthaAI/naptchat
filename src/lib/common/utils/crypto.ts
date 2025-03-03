import * as secp from "@noble/secp256k1";

// Web Crypto API key storage constants
export const DB_NAME = "auth";
export const DB_VERSION = 1;
export const STORE_NAME = "keys";
export const KEY_NAME = "private_key";
export const WRAPPING_KEY_NAME = "wrapping_key";

export const generateKeyPair = () => {
	const privKey = secp.utils.randomPrivateKey();
	const pubKey = secp.getPublicKey(privKey);

	return { privKey, pubKey };
};

/**
 *
 * @param msg Message to sign
 * @param privKey Private key
 * @returns Hexadecimal signature string
 */
export const sign = (msg: string, privKey: secp.Bytes): Promise<string> => {
	return crypto.subtle
		.digest("SHA-256", new TextEncoder().encode(msg))
		.then((msgHash) => secp.signAsync(new Uint8Array(msgHash), privKey))
		.then((signature) => signature.toCompactHex());
};

/**
 * Opens the IndexedDB database for key storage
 * @returns Promise resolving to the database instance
 */
export const openDatabase = (): Promise<IDBDatabase> => {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);
		request.onerror = () => reject(request.error);
		request.onsuccess = () => resolve(request.result);

		request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
			const db = (event.target as IDBOpenDBRequest).result;

			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME);
			}
		};
	});
};

/**
 * Gets or creates a wrapping key for secure key storage
 * @returns Promise resolving to the wrapping key
 */
export const getOrCreateWrappingKey = (): Promise<CryptoKey> => {
	return openDatabase()
		.then((db) => {
			// Try to get existing wrapping key
			const transaction = db.transaction([STORE_NAME], "readonly");
			const store = transaction.objectStore(STORE_NAME);

			return new Promise<{ db: IDBDatabase; wrappingKeyData: JsonWebKey | undefined }>(
				(resolve, reject) => {
					const request = store.get(WRAPPING_KEY_NAME);
					request.onsuccess = () => resolve({ db, wrappingKeyData: request.result });
					request.onerror = () => reject(request.error);
				},
			);
		})
		.then(({ db, wrappingKeyData }) => {
			if (wrappingKeyData) {
				// Import existing wrapping key
				return crypto.subtle
					.importKey("jwk", wrappingKeyData, { name: "AES-GCM", length: 256 }, false, [
						"wrapKey",
						"unwrapKey",
					])
					.then((key) => {
						db.close();
						return key;
					})
					.catch((error) => {
						db.close();
						throw error;
					});
			}

			// Generate new wrapping key if none exists
			return crypto.subtle
				.generateKey({ name: "AES-GCM", length: 256 }, true, ["wrapKey", "unwrapKey"])
				.then((wrappingKey) => {
					return crypto.subtle.exportKey("jwk", wrappingKey).then((exportedKey) => {
						const writeTx = db.transaction([STORE_NAME], "readwrite");
						const writeStore = writeTx.objectStore(STORE_NAME);

						return new Promise<CryptoKey>((resolve, reject) => {
							const request = writeStore.put(exportedKey, WRAPPING_KEY_NAME);

							request.onsuccess = () => {
								db.close();
								resolve(wrappingKey);
							};

							request.onerror = () => {
								db.close();
								reject(request.error);
							};
						});
					});
				});
		});
};

/**
 * Wraps a private key for secure storage
 * @param privateKey The private key to wrap
 * @returns Promise resolving to the wrapped key as ArrayBuffer
 */
export const wrapPrivateKey = (privateKey: Uint8Array): Promise<ArrayBuffer> => {
	// Generate a random initialization vector for AES-GCM
	const iv = crypto.getRandomValues(new Uint8Array(12));

	return (
		crypto.subtle
			// Import the raw private key as a CryptoKey
			.importKey("raw", privateKey, { name: "HMAC", hash: "SHA-256" }, true, ["sign"])
			.then((importedKey) =>
				getOrCreateWrappingKey().then((wrappingKey) => ({ importedKey, wrappingKey })),
			)
			.then(({ importedKey, wrappingKey }) =>
				crypto.subtle.wrapKey("raw", importedKey, wrappingKey, { name: "AES-GCM", iv }),
			)
			// Combine initialization vector and wrapped key for storage
			.then((wrappedKey) => {
				const result = new Uint8Array(iv.length + wrappedKey.byteLength);

				result.set(iv, 0);
				result.set(new Uint8Array(wrappedKey), iv.length);

				return result.buffer;
			})
	);
};

/**
 * Unwraps a stored private key
 * @param wrappedData The wrapped key data
 * @returns Promise resolving to the unwrapped key or null if failed
 */
export const unwrapPrivateKey = (wrappedData: ArrayBuffer): Promise<Uint8Array | null> => {
	// Extract initialization vector and wrapped key
	const data = new Uint8Array(wrappedData);
	const iv = data.slice(0, 12);
	const wrappedKey = data.slice(12);

	return getOrCreateWrappingKey()
		.then((wrappingKey) => {
			return crypto.subtle.unwrapKey(
				"raw",
				wrappedKey,
				wrappingKey,
				{ name: "AES-GCM", iv },
				{ name: "HMAC", hash: "SHA-256" },
				true,
				["sign"],
			);
		})
		.then((unwrappedKey) => crypto.subtle.exportKey("raw", unwrappedKey))
		.then((exportedKey) => new Uint8Array(exportedKey))
		.catch((error) => {
			console.error("Error unwrapping private key:", error);

			return null;
		});
};

/**
 * Securely stores a private key
 * @param privateKey The private key to store
 * @returns Promise that resolves when the key is stored
 */
export const storeSecurePrivateKey = (privateKey: Uint8Array): Promise<void> =>
	wrapPrivateKey(privateKey).then((wrappedKey) =>
		openDatabase().then((db) => {
			const transaction = db.transaction([STORE_NAME], "readwrite");
			const store = transaction.objectStore(STORE_NAME);

			return new Promise<void>((resolve, reject) => {
				const request = store.put(wrappedKey, KEY_NAME);

				request.onsuccess = () => {
					db.close();
					resolve();
				};

				request.onerror = () => {
					db.close();
					reject(request.error);
				};
			});
		}),
	);

/**
 * Retrieves a securely stored private key
 * @returns Promise resolving to the private key or null if not found
 */
export const getSecurePrivateKey = (): Promise<Uint8Array | null> => {
	return openDatabase()
		.then((db) => {
			const transaction = db.transaction([STORE_NAME], "readonly");
			const store = transaction.objectStore(STORE_NAME);

			return new Promise<{ db: IDBDatabase; wrappedKeyData: ArrayBuffer | undefined }>(
				(resolve, reject) => {
					const request = store.get(KEY_NAME);

					request.onsuccess = () => resolve({ db, wrappedKeyData: request.result });

					request.onerror = () => {
						db.close();
						reject(request.error);
					};
				},
			);
		})
		.then(({ db, wrappedKeyData }) => {
			db.close();

			if (wrappedKeyData) {
				return unwrapPrivateKey(wrappedKeyData);
			} else return null;
		})
		.catch((error) => {
			console.error("Failed to retrieve secure private key:", error);

			return null;
		});
};

/**
 * Clears the stored private key
 * @returns Promise that resolves when the key is cleared
 */
export const clearSecurePrivateKey = (): Promise<void> => {
	return openDatabase()
		.then((db) => {
			const transaction = db.transaction([STORE_NAME], "readwrite");
			const store = transaction.objectStore(STORE_NAME);

			return new Promise<void>((resolve, reject) => {
				const request = store.delete(KEY_NAME);

				request.onsuccess = () => {
					db.close();
					resolve();
				};

				request.onerror = () => {
					db.close();
					reject(request.error);
				};
			});
		})
		.catch((error) => {
			console.error("Failed to clear secure private key:", error);
		});
};
