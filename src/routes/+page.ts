import { napthaNodeClient } from "$lib/common/api/naptha-node";
import { getChats } from "$lib/entities/chat";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params: _ }) => {
	const chatsResponse = await getChats();

	return {
		chats: chatsResponse,
	};
};
