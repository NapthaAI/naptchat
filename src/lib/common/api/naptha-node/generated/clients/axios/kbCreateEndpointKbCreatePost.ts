/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  KbCreateEndpointKbCreatePostMutationRequest,
  KbCreateEndpointKbCreatePostMutationResponse,
  KbCreateEndpointKbCreatePost422,
} from '../../types/KbCreateEndpointKbCreatePost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Create a knowledge base:param kb_input: KBDeployment:return: KBDeployment
 * @summary Kb Create Endpoint
 * {@link /kb/create}
 */
export async function kbCreateEndpointKbCreatePost(
  data: KbCreateEndpointKbCreatePostMutationRequest,
  config: Partial<RequestConfig<KbCreateEndpointKbCreatePostMutationRequest>> = {},
) {
  const res = await client<KbCreateEndpointKbCreatePostMutationResponse, KbCreateEndpointKbCreatePost422, KbCreateEndpointKbCreatePostMutationRequest>({
    method: 'POST',
    url: `/kb/create`,
    data,
    ...config,
  })
  return res
}