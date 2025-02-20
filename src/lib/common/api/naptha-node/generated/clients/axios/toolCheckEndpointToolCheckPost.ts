/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ToolCheckEndpointToolCheckPostMutationRequest,
  ToolCheckEndpointToolCheckPostMutationResponse,
  ToolCheckEndpointToolCheckPost422,
} from '../../types/ToolCheckEndpointToolCheckPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getToolCheckEndpointToolCheckPostUrl() {
  return `/tool/check` as const
}

/**
 * @description Check a tool:param tool_run: ToolRun details:return: Status
 * @summary Tool Check Endpoint
 * {@link /tool/check}
 */
export async function toolCheckEndpointToolCheckPost(
  data: ToolCheckEndpointToolCheckPostMutationRequest,
  config: Partial<RequestConfig<ToolCheckEndpointToolCheckPostMutationRequest>> = {},
) {
  const res = await client<
    ToolCheckEndpointToolCheckPostMutationResponse,
    ResponseErrorConfig<ToolCheckEndpointToolCheckPost422>,
    ToolCheckEndpointToolCheckPostMutationRequest
  >({ method: 'POST', url: getToolCheckEndpointToolCheckPostUrl().toString(), data, ...config })
  return res
}