import client from "@kubb/plugin-client/clients/axios";
import type {
	UserRegisterEndpointUserRegisterPostMutationRequest,
	UserRegisterEndpointUserRegisterPostMutationResponse,
	UserRegisterEndpointUserRegisterPost422,
} from "../../types/UserRegisterEndpointUserRegisterPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Register a new user.
 * @summary User Register Endpoint
 * {@link /user/register}
 */
export async function userRegisterEndpointUserRegisterPost(
	data?: UserRegisterEndpointUserRegisterPostMutationRequest,
	config: Partial<RequestConfig<UserRegisterEndpointUserRegisterPostMutationRequest>> = {},
) {
	const res = await client<
		UserRegisterEndpointUserRegisterPostMutationResponse,
		UserRegisterEndpointUserRegisterPost422,
		UserRegisterEndpointUserRegisterPostMutationRequest
	>({ method: "POST", url: `/user/register`, data, ...config });

	return res;
}
