/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest,
  EnvironmentCheckEndpointEnvironmentCheckPostMutationResponse,
  EnvironmentCheckEndpointEnvironmentCheckPost422,
} from '../../types/EnvironmentCheckEndpointEnvironmentCheckPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getEnvironmentCheckEndpointEnvironmentCheckPostUrl() {
  return `/environment/check` as const
}

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
    ResponseErrorConfig<EnvironmentCheckEndpointEnvironmentCheckPost422>,
    EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest
  >({ method: 'POST', url: getEnvironmentCheckEndpointEnvironmentCheckPostUrl().toString(), data, ...config })
  return res
}