/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  MemoryRunEndpointMemoryRunPostMutationRequest,
  MemoryRunEndpointMemoryRunPostMutationResponse,
  MemoryRunEndpointMemoryRunPost422,
} from '../../types/MemoryRunEndpointMemoryRunPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Run a memory module:param memory_run_input: Memory run specifications:return: Status
 * @summary Memory Run Endpoint
 * {@link /memory/run}
 */
export async function memoryRunEndpointMemoryRunPost(
  data: MemoryRunEndpointMemoryRunPostMutationRequest,
  config: Partial<RequestConfig<MemoryRunEndpointMemoryRunPostMutationRequest>> = {},
) {
  const res = await client<MemoryRunEndpointMemoryRunPostMutationResponse, MemoryRunEndpointMemoryRunPost422, MemoryRunEndpointMemoryRunPostMutationRequest>({
    method: 'POST',
    url: `/memory/run`,
    data,
    ...config,
  })
  return res
}