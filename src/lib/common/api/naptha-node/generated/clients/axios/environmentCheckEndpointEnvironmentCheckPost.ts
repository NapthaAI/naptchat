import client from "@kubb/plugin-client/clients/axios";
import type {
	EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest,
	EnvironmentCheckEndpointEnvironmentCheckPostMutationResponse,
	EnvironmentCheckEndpointEnvironmentCheckPost422,
} from "../../types/EnvironmentCheckEndpointEnvironmentCheckPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Check an environment:param environment_run: EnvironmentRun details:return: Status
 * @summary Environment Check Endpoint
 * {@link /environment/check}
 */
export async function environmentCheckEndpointEnvironmentCheckPost(
	data: EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest,
	config: Partial<RequestConfig<EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest>> = {},
) {
	const res = await client<
		EnvironmentCheckEndpointEnvironmentCheckPostMutationResponse,
		EnvironmentCheckEndpointEnvironmentCheckPost422,
		EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest
	>({ method: "POST", url: `/environment/check`, data, ...config });

	return res;
}
