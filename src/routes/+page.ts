import { getTopics } from "$lib/entities/topic";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params: _ }) => {
	const topicsResponse = await getTopics();

	return {
		topics: topicsResponse,
	};
};
