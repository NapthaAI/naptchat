/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  UserCheckEndpointUserCheckPostMutationRequest,
  UserCheckEndpointUserCheckPostMutationResponse,
  UserCheckEndpointUserCheckPost422,
} from '../../types/UserCheckEndpointUserCheckPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getUserCheckEndpointUserCheckPostUrl() {
  return `/user/check` as const
}

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
    ResponseErrorConfig<UserCheckEndpointUserCheckPost422>,
    UserCheckEndpointUserCheckPostMutationRequest
  >({ method: 'POST', url: getUserCheckEndpointUserCheckPostUrl().toString(), data, ...config })
  return res
}