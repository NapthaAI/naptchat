import type { LayoutLoad } from "./$types";
import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { napthaNodeClient, type User } from "$common/api/naptha-node";

export const load: LayoutLoad = () => {
	const session = writable<User | null>(
		browser ? (localStorage.getItem("user") as User | null) : null,
	);

	session.subscribe((user) => {
		if (browser) {
			if (user !== null) {
				const persistedId = localStorage.getItem("user:id");
				const persistedPublicKey = localStorage.getItem("user:public_key");

				if (user.id !== persistedId || user.public_key !== persistedPublicKey) {
					localStorage.setItem("user:id", user.id);
					localStorage.setItem("user:public_key", user.public_key);
				}
			} else {
				localStorage.removeItem("user:id");
				localStorage.removeItem("user:public_key");
			}
		}
	});

	return {
		session,

		actions: {
			signUp() {
				napthaNodeClient.userRegister().then(({ data }) => {
					session.set(data);
				});
			},

			signIn(id: string) {
				userId.set(id);
			},

			signOut() {
				userId.set(null);
			},
		},
	};
};
