import { napthaNodeClient } from "$common/api/naptha-node";
import { getTopics } from "$entities/topic";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params: _ }) => {
	const topicsResponse = await getTopics();

	napthaNodeClient.orchestratorCheck().then((response) => {
		console.log(response);
	});

	return {
		topics: topicsResponse,
	};
};
