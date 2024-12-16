import { napthaNodeClient } from "$common/api/naptha-node";
import { getChats } from "$lib/entities/chat";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params: _ }) => {
	const chatsResponse = await getChats();

	// napthaNodeClient
	// 	.orchestratorCheck()
	// 	.then((response) => {
	// 		console.log(response);
	// 	})
	// 	.catch((error) => {
	// 		console.error(error.message);
	// 	});

	return {
		chats: chatsResponse,
	};
};
