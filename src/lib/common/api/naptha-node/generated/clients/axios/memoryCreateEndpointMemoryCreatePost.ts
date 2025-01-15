/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  MemoryCreateEndpointMemoryCreatePostMutationRequest,
  MemoryCreateEndpointMemoryCreatePostMutationResponse,
  MemoryCreateEndpointMemoryCreatePost422,
} from '../../types/MemoryCreateEndpointMemoryCreatePost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Create a memory module:param memory_input: MemoryDeployment:return: MemoryDeployment
 * @summary Memory Create Endpoint
 * {@link /memory/create}
 */
export async function memoryCreateEndpointMemoryCreatePost(
  data: MemoryCreateEndpointMemoryCreatePostMutationRequest,
  config: Partial<RequestConfig<MemoryCreateEndpointMemoryCreatePostMutationRequest>> = {},
) {
  const res = await client<
    MemoryCreateEndpointMemoryCreatePostMutationResponse,
    MemoryCreateEndpointMemoryCreatePost422,
    MemoryCreateEndpointMemoryCreatePostMutationRequest
  >({ method: 'POST', url: `/memory/create`, data, ...config })
  return res
}