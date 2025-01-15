/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ToolCreateEndpointToolCreatePostMutationRequest,
  ToolCreateEndpointToolCreatePostMutationResponse,
  ToolCreateEndpointToolCreatePost422,
} from '../../types/ToolCreateEndpointToolCreatePost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Create a tool:param tool_input: ToolDeployment :return: ToolDeployment
 * @summary Tool Create Endpoint
 * {@link /tool/create}
 */
export async function toolCreateEndpointToolCreatePost(
  data: ToolCreateEndpointToolCreatePostMutationRequest,
  config: Partial<RequestConfig<ToolCreateEndpointToolCreatePostMutationRequest>> = {},
) {
  const res = await client<
    ToolCreateEndpointToolCreatePostMutationResponse,
    ToolCreateEndpointToolCreatePost422,
    ToolCreateEndpointToolCreatePostMutationRequest
  >({ method: 'POST', url: `/tool/create`, data, ...config })
  return res
}