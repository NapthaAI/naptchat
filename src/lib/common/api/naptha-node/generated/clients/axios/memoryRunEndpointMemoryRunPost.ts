/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  MemoryRunEndpointMemoryRunPostMutationRequest,
  MemoryRunEndpointMemoryRunPostMutationResponse,
  MemoryRunEndpointMemoryRunPost422,
} from '../../types/MemoryRunEndpointMemoryRunPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getMemoryRunEndpointMemoryRunPostUrl() {
  return `/memory/run` as const
}

/**
 * @description Run a memory module:param memory_run_input: Memory run specifications:return: Status
 * @summary Memory Run Endpoint
 * {@link /memory/run}
 */
export async function memoryRunEndpointMemoryRunPost(
  data: MemoryRunEndpointMemoryRunPostMutationRequest,
  config: Partial<RequestConfig<MemoryRunEndpointMemoryRunPostMutationRequest>> = {},
) {
  const res = await client<
    MemoryRunEndpointMemoryRunPostMutationResponse,
    ResponseErrorConfig<MemoryRunEndpointMemoryRunPost422>,
    MemoryRunEndpointMemoryRunPostMutationRequest
  >({ method: 'POST', url: getMemoryRunEndpointMemoryRunPostUrl().toString(), data, ...config })
  return res
}