import type { LayoutLoad } from "./$types";
import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { napthaNodeClient, type User } from "$common/api/naptha-node";
import type { ByPublicKey } from "$common/types";
import type { OrchestratorRunOutput } from "$common/api/naptha-node/generated";
import { generateKeyPair, sign } from "$common/utils/crypto";

export const load: LayoutLoad = async () => {
	const session = writable<User | null>(null);

	session.subscribe((sessionData) => {
		if (browser) {
			const persistedId = localStorage.getItem("user:id");
			const persistedPublicKey = localStorage.getItem("user:public_key");

			if (sessionData === null && persistedId !== null && persistedPublicKey !== null) {
				session.set({
					id: persistedId,
					public_key: persistedPublicKey,
				});
			}

			if (
				sessionData !== null &&
				(sessionData.id !== persistedId || sessionData.public_key !== persistedPublicKey)
			) {
				localStorage.setItem("user:id", sessionData.id);
				localStorage.setItem("user:public_key", sessionData.public_key);
			}
		}
	});

	const orchestratorStatus = writable<OrchestratorRunOutput | null>(null);

	session.subscribe((sessionData) => {
		if (sessionData !== null) {
			// Try to get stored private key from IndexedDB
			void new Promise<IDBDatabase>((resolve, reject) => {
				const request = indexedDB.open("auth", 1);
				request.onerror = () => reject(request.error);
				request.onsuccess = () => resolve(request.result);

				request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
					const db = (event.target as IDBOpenDBRequest).result;

					if (!db.objectStoreNames.contains("keys")) {
						db.createObjectStore("keys");
					}
				};
			})
				.then((db: IDBDatabase) => {
					return new Promise<ArrayBuffer>((resolve, reject) => {
						const transaction = db.transaction(["keys"], "readonly");
						const request = transaction.objectStore("keys").get("private_key");
						request.onsuccess = () => resolve(request.result);
						request.onerror = () => reject(request.error);
					});
				})
				.then((privKeyData) => {
					if (!privKeyData) return;

					return crypto.subtle
						.importKey("raw", privKeyData, { name: "ECDSA", namedCurve: "P-256K1" }, true, ["sign"])
						.then(() => sign(sessionData.id, new Uint8Array(privKeyData)))
						.then((signature) =>
							napthaNodeClient
								.multiagentChatOrchestratorCheck({
									userId: sessionData.id,
									signature,
								})
								.then(({ data }) => orchestratorStatus.set(data)),
						);
				})
				.catch((error) => console.error("Failed to access secure storage:", error));
		}
	});

	return {
		session,
		orchestratorStatus,

		actions: {
			async signUp() {
				const { privKey, pubKey } = generateKeyPair();

				const publicKey = Array.from(pubKey)
					.map((b) => b.toString(16).padStart(2, "0"))
					.join("");

				void napthaNodeClient
					.userRegister(publicKey)
					.then(async ({ data }) => {
						if (browser) {
							void new Promise<IDBDatabase>((resolve, reject) => {
								const request = indexedDB.open("auth", 1);
								request.onerror = () => reject(request.error);
								request.onsuccess = () => resolve(request.result);

								request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
									const db = (event.target as IDBOpenDBRequest).result;

									if (!db.objectStoreNames.contains("keys")) {
										db.createObjectStore("keys");
									}
								};
							})
								.then((db: IDBDatabase) => {
									const transaction = db.transaction(["keys"], "readwrite");
									transaction.objectStore("keys").put(privKey, "private_key");
								})
								.catch((error: Error) => console.error("Failed to store private key:", error));
						}

						session.set(data);
					})
					.catch(console.error);
			},

			async signIn({ publicKey }: ByPublicKey) {
				// Try stored private key first
				if (browser) {
					return new Promise<IDBDatabase>((resolve, reject) => {
						const request = indexedDB.open("auth", 1);
						request.onerror = () => reject(request.error);
						request.onsuccess = () => resolve(request.result);

						request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
							const db = (event.target as IDBOpenDBRequest).result;

							if (!db.objectStoreNames.contains("keys")) {
								db.createObjectStore("keys");
							}
						};
					})
						.then((db: IDBDatabase) => {
							return new Promise<ArrayBuffer>((resolve, reject) => {
								const transaction = db.transaction(["keys"], "readonly");
								const request = transaction.objectStore("keys").get("private_key");
								request.onsuccess = () => resolve(request.result);
								request.onerror = () => reject(request.error);
							});
						})
						.then((privKeyData) => {
							if (!privKeyData) return false;

							return crypto.subtle
								.importKey("raw", privKeyData, { name: "ECDSA", namedCurve: "P-256K1" }, true, [
									"sign",
								])
								.then(() =>
									napthaNodeClient
										.userCheck({ publicKey })
										.then(({ data: { is_registered, ...sessionData } }) => {
											if (is_registered) session.set(sessionData);

											return is_registered;
										}),
								);
						})
						.catch((error: Error) => {
							console.error("Failed to access secure storage:", error);
							return false;
						});
				}

				// Fallback to manual public key check
				void napthaNodeClient
					.userCheck({ publicKey })
					.then(({ data: { is_registered, ...sessionData } }) => {
						if (is_registered) {
							session.set(sessionData);
						}
					})
					.catch(console.error);
			},

			async signOut() {
				session.set(null);

				if (browser) {
					localStorage.removeItem("user:id");
					localStorage.removeItem("user:public_key");

					try {
						// Clear private key from IndexedDB
						const db = await indexedDB.open("auth", 1);
						const transaction = db.result.transaction(["keys"], "readwrite");
						transaction.objectStore("keys").delete("private_key");
					} catch (error: unknown) {
						console.error("Failed to clear secure storage:", error);
					}
				}
			},
		},
	};
};
