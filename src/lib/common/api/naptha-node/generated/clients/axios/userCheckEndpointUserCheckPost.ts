import client from "@kubb/plugin-client/clients/axios";
import type {
	UserCheckEndpointUserCheckPostMutationRequest,
	UserCheckEndpointUserCheckPostMutationResponse,
	UserCheckEndpointUserCheckPost422,
} from "../../types/UserCheckEndpointUserCheckPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Check if a user exists.
 * @summary User Check Endpoint
 * {@link /user/check}
 */
export async function userCheckEndpointUserCheckPost(
	data?: UserCheckEndpointUserCheckPostMutationRequest,
	config: Partial<RequestConfig<UserCheckEndpointUserCheckPostMutationRequest>> = {},
) {
	const res = await client<
		UserCheckEndpointUserCheckPostMutationResponse,
		UserCheckEndpointUserCheckPost422,
		UserCheckEndpointUserCheckPostMutationRequest
	>({
		method: "POST",
		url: `/user/check`,
		data,
		...config,
	});

	return res;
}
