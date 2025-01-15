/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  EnvironmentRunEndpointEnvironmentRunPostMutationRequest,
  EnvironmentRunEndpointEnvironmentRunPostMutationResponse,
  EnvironmentRunEndpointEnvironmentRunPost422,
} from '../../types/EnvironmentRunEndpointEnvironmentRunPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

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
    EnvironmentRunEndpointEnvironmentRunPost422,
    EnvironmentRunEndpointEnvironmentRunPostMutationRequest
  >({ method: 'POST', url: `/environment/run`, data, ...config })
  return res
}