/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ToolCheckEndpointToolCheckPostMutationRequest,
  ToolCheckEndpointToolCheckPostMutationResponse,
  ToolCheckEndpointToolCheckPost422,
} from '../../types/ToolCheckEndpointToolCheckPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Check a tool:param tool_run: ToolRun details:return: Status
 * @summary Tool Check Endpoint
 * {@link /tool/check}
 */
export async function toolCheckEndpointToolCheckPost(
  data: ToolCheckEndpointToolCheckPostMutationRequest,
  config: Partial<RequestConfig<ToolCheckEndpointToolCheckPostMutationRequest>> = {},
) {
  const res = await client<ToolCheckEndpointToolCheckPostMutationResponse, ToolCheckEndpointToolCheckPost422, ToolCheckEndpointToolCheckPostMutationRequest>({
    method: 'POST',
    url: `/tool/check`,
    data,
    ...config,
  })
  return res
}