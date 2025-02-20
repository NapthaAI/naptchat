/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ToolRunEndpointToolRunPostMutationRequest,
  ToolRunEndpointToolRunPostMutationResponse,
  ToolRunEndpointToolRunPost422,
} from '../../types/ToolRunEndpointToolRunPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getToolRunEndpointToolRunPostUrl() {
  return `/tool/run` as const
}

/**
 * @description Run a tool:param tool_run_input: Tool run specifications:return: Status
 * @summary Tool Run Endpoint
 * {@link /tool/run}
 */
export async function toolRunEndpointToolRunPost(
  data: ToolRunEndpointToolRunPostMutationRequest,
  config: Partial<RequestConfig<ToolRunEndpointToolRunPostMutationRequest>> = {},
) {
  const res = await client<
    ToolRunEndpointToolRunPostMutationResponse,
    ResponseErrorConfig<ToolRunEndpointToolRunPost422>,
    ToolRunEndpointToolRunPostMutationRequest
  >({ method: 'POST', url: getToolRunEndpointToolRunPostUrl().toString(), data, ...config })
  return res
}