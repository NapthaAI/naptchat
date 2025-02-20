/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  KbCreateEndpointKbCreatePostMutationRequest,
  KbCreateEndpointKbCreatePostMutationResponse,
  KbCreateEndpointKbCreatePost422,
} from '../../types/KbCreateEndpointKbCreatePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getKbCreateEndpointKbCreatePostUrl() {
  return `/kb/create` as const
}

/**
 * @description Create a knowledge base:param kb_input: KBDeployment:return: KBDeployment
 * @summary Kb Create Endpoint
 * {@link /kb/create}
 */
export async function kbCreateEndpointKbCreatePost(
  data: KbCreateEndpointKbCreatePostMutationRequest,
  config: Partial<RequestConfig<KbCreateEndpointKbCreatePostMutationRequest>> = {},
) {
  const res = await client<
    KbCreateEndpointKbCreatePostMutationResponse,
    ResponseErrorConfig<KbCreateEndpointKbCreatePost422>,
    KbCreateEndpointKbCreatePostMutationRequest
  >({ method: 'POST', url: getKbCreateEndpointKbCreatePostUrl().toString(), data, ...config })
  return res
}