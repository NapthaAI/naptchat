/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  MemoryCheckEndpointMemoryCheckPostMutationRequest,
  MemoryCheckEndpointMemoryCheckPostMutationResponse,
  MemoryCheckEndpointMemoryCheckPost422,
} from '../../types/MemoryCheckEndpointMemoryCheckPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

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
    MemoryCheckEndpointMemoryCheckPost422,
    MemoryCheckEndpointMemoryCheckPostMutationRequest
  >({ method: 'POST', url: `/memory/check`, data, ...config })
  return res
}