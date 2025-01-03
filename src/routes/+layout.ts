import type { LayoutLoad } from "./$types";
import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { napthaNodeClient, type User } from "$common/api/naptha-node";
import type { ByPublicKey } from "$common/types";
import type { OrchestratorRunOutput } from "$common/api/naptha-node/generated";

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
			napthaNodeClient
				.multiagentChatOrchestratorCheck({ publicKey: sessionData.public_key })
				.then(({ data }) => orchestratorStatus.set(data))
				.catch(console.error);
		}
	});

	return {
		session,
		orchestratorStatus,

		actions: {
			signUp() {
				void napthaNodeClient
					.userRegister()
					.then(({ data }) => {
						session.set(data);
					})
					.catch(console.error);
			},

			signIn({ publicKey }: ByPublicKey) {
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
				}
			},
		},
	};
};
