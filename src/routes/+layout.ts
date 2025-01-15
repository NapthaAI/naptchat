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
			const storedPrivKey = browser ? localStorage.getItem("user:private_key") : null;

			if (storedPrivKey) {
				const privKeyBytes = new Uint8Array(
					storedPrivKey.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) ?? [],
				);

				void sign(sessionData.id, privKeyBytes)
					.then((signature) => {
						napthaNodeClient
							.multiagentChatOrchestratorCheck({
								userId: sessionData.id,
								signature,
							})
							.then(({ data }) => orchestratorStatus.set(data))
							.catch(console.error);
					})
					.catch(console.error);
			}
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
					.then(({ data }) => {
						if (browser) {
							localStorage.setItem(
								"user:private_key",
								Array.from(privKey)
									.map((b) => b.toString(16).padStart(2, "0"))
									.join(""),
							);
						}

						session.set(data);
					})
					.catch(console.error);
			},

			async signIn({ publicKey }: ByPublicKey) {
				// Try stored private key first
				if (browser) {
					const storedPrivKey = localStorage.getItem("user:private_key");

					if (storedPrivKey) {
						const privKeyBytes = new Uint8Array(
							storedPrivKey.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) ?? [],
						);

						void napthaNodeClient
							.userCheck({ publicKey })
							.then(async ({ data: { is_registered, ...sessionData } }) => {
								if (is_registered) {
									session.set(sessionData);
								}
							})
							.catch(console.error);

						return;
					}
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

			signOut() {
				session.set(null);

				if (browser) {
					localStorage.removeItem("user:id");
					localStorage.removeItem("user:public_key");
					localStorage.removeItem("user:private_key");
				}
			},
		},
	};
};
