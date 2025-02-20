/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ToolCreateEndpointToolCreatePostMutationRequest,
  ToolCreateEndpointToolCreatePostMutationResponse,
  ToolCreateEndpointToolCreatePost422,
} from '../../types/ToolCreateEndpointToolCreatePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getToolCreateEndpointToolCreatePostUrl() {
  return `/tool/create` as const
}

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
    ResponseErrorConfig<ToolCreateEndpointToolCreatePost422>,
    ToolCreateEndpointToolCreatePostMutationRequest
  >({ method: 'POST', url: getToolCreateEndpointToolCreatePostUrl().toString(), data, ...config })
  return res
}