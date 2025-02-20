/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  UserRegisterEndpointUserRegisterPostMutationRequest,
  UserRegisterEndpointUserRegisterPostMutationResponse,
  UserRegisterEndpointUserRegisterPost422,
} from '../../types/UserRegisterEndpointUserRegisterPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getUserRegisterEndpointUserRegisterPostUrl() {
  return `/user/register` as const
}

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
    ResponseErrorConfig<UserRegisterEndpointUserRegisterPost422>,
    UserRegisterEndpointUserRegisterPostMutationRequest
  >({ method: 'POST', url: getUserRegisterEndpointUserRegisterPostUrl().toString(), data, ...config })
  return res
}