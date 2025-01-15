/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  EnvironmentCreateEndpointEnvironmentCreatePostMutationRequest,
  EnvironmentCreateEndpointEnvironmentCreatePostMutationResponse,
  EnvironmentCreateEndpointEnvironmentCreatePost422,
} from '../../types/EnvironmentCreateEndpointEnvironmentCreatePost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Create an environment:param environment_input: EnvironmentDeployment:return: EnvironmentDeployment
 * @summary Environment Create Endpoint
 * {@link /environment/create}
 */
export async function environmentCreateEndpointEnvironmentCreatePost(
  data: EnvironmentCreateEndpointEnvironmentCreatePostMutationRequest,
  config: Partial<RequestConfig<EnvironmentCreateEndpointEnvironmentCreatePostMutationRequest>> = {},
) {
  const res = await client<
    EnvironmentCreateEndpointEnvironmentCreatePostMutationResponse,
    EnvironmentCreateEndpointEnvironmentCreatePost422,
    EnvironmentCreateEndpointEnvironmentCreatePostMutationRequest
  >({ method: 'POST', url: `/environment/create`, data, ...config })
  return res
}