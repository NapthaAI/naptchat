/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  EnvironmentRunEndpointEnvironmentRunPostMutationRequest,
  EnvironmentRunEndpointEnvironmentRunPostMutationResponse,
  EnvironmentRunEndpointEnvironmentRunPost422,
} from '../../types/EnvironmentRunEndpointEnvironmentRunPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getEnvironmentRunEndpointEnvironmentRunPostUrl() {
  return `/environment/run` as const
}

/**
 * @description Run an environment:param environment_run_input: Environment run specifications :return: Status
 * @summary Environment Run Endpoint
 * {@link /environment/run}
 */
export async function environmentRunEndpointEnvironmentRunPost(
  data: EnvironmentRunEndpointEnvironmentRunPostMutationRequest,
  config: Partial<RequestConfig<EnvironmentRunEndpointEnvironmentRunPostMutationRequest>> = {},
) {
  const res = await client<
    EnvironmentRunEndpointEnvironmentRunPostMutationResponse,
    ResponseErrorConfig<EnvironmentRunEndpointEnvironmentRunPost422>,
    EnvironmentRunEndpointEnvironmentRunPostMutationRequest
  >({ method: 'POST', url: getEnvironmentRunEndpointEnvironmentRunPostUrl().toString(), data, ...config })
  return res
}