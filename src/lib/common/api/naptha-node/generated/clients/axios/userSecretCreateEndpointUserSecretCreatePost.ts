import client from "@kubb/plugin-client/clients/axios";
import type {
	UserSecretCreateEndpointUserSecretCreatePostMutationRequest,
	UserSecretCreateEndpointUserSecretCreatePostMutationResponse,
	UserSecretCreateEndpointUserSecretCreatePostQueryParams,
	UserSecretCreateEndpointUserSecretCreatePost422,
} from "../../types/UserSecretCreateEndpointUserSecretCreatePost.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";

export function getUserSecretCreateEndpointUserSecretCreatePostUrl() {
	return `/user/secret/create` as const;
}

/**
 * @summary User Secret Create Endpoint
 * {@link /user/secret/create}
 */
export async function userSecretCreateEndpointUserSecretCreatePost(
	params: UserSecretCreateEndpointUserSecretCreatePostQueryParams,
	data?: UserSecretCreateEndpointUserSecretCreatePostMutationRequest,
	config: Partial<RequestConfig<UserSecretCreateEndpointUserSecretCreatePostMutationRequest>> = {},
) {
	const res = await client<
		UserSecretCreateEndpointUserSecretCreatePostMutationResponse,
		ResponseErrorConfig<UserSecretCreateEndpointUserSecretCreatePost422>,
		UserSecretCreateEndpointUserSecretCreatePostMutationRequest
	>({
		method: "POST",
		url: getUserSecretCreateEndpointUserSecretCreatePostUrl().toString(),
		params,
		data,
		...config,
	});

	return res;
}
