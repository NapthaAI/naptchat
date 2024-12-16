import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getChats } from "$lib/entities/chat";

export const load: PageLoad = async ({ params }) => {
	const chatId = Number(params.slug);
	const chatsResponse = await getChats();
	const chat = chatsResponse.find((chat) => chat.id === chatId);

	if (chat) {
		return chat;
	} else {
		error(404, `Chat with id ${chatId} not found`);
	}
};
