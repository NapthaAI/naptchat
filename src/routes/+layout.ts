import { userRegisterEndpointUserRegisterPost } from "$lib/common/api/naptha-node/generated";
import { env } from "$env/dynamic/public";
import type { LayoutLoad } from "./$types";
import { writable, type Writable } from "svelte/store";

export const load: LayoutLoad = () => {
	const userId: Writable<string | undefined> = writable<string | undefined>(
		localStorage !== undefined ? (localStorage.getItem("userId") ?? undefined) : undefined,
	);

	userId.subscribe((id) => {
		if (typeof localStorage !== "undefined") {
			if (id) {
				localStorage.setItem("userId", id);
			} else {
				localStorage.removeItem("userId");
			}
		}
	});

	return {
		userId,

		actions: {
			async signUp() {
				const response = await userRegisterEndpointUserRegisterPost(
					{ public_key: crypto.randomUUID() },
					{ baseURL: env.NAPTHA_NODE_URL },
				);

				return response.data.id;
			},

			signIn(id: string) {
				userId.set(id);
				return id;
			},

			signOut() {
				userId.set(undefined);
				return undefined;
			},
		},
	};
};
