/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  MemoryCheckEndpointMemoryCheckPostMutationRequest,
  MemoryCheckEndpointMemoryCheckPostMutationResponse,
  MemoryCheckEndpointMemoryCheckPost422,
} from '../../types/MemoryCheckEndpointMemoryCheckPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getMemoryCheckEndpointMemoryCheckPostUrl() {
  return `/memory/check` as const
}

/**
 * @description Check a memory module:param memory_run: MemoryRun details:return: Status
 * @summary Memory Check Endpoint
 * {@link /memory/check}
 */
export async function memoryCheckEndpointMemoryCheckPost(
  data: MemoryCheckEndpointMemoryCheckPostMutationRequest,
  config: Partial<RequestConfig<MemoryCheckEndpointMemoryCheckPostMutationRequest>> = {},
) {
  const res = await client<
    MemoryCheckEndpointMemoryCheckPostMutationResponse,
    ResponseErrorConfig<MemoryCheckEndpointMemoryCheckPost422>,
    MemoryCheckEndpointMemoryCheckPostMutationRequest
  >({ method: 'POST', url: getMemoryCheckEndpointMemoryCheckPostUrl().toString(), data, ...config })
  return res
}