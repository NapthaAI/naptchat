/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  KbCheckEndpointKbCheckPostMutationRequest,
  KbCheckEndpointKbCheckPostMutationResponse,
  KbCheckEndpointKbCheckPost422,
} from '../../types/KbCheckEndpointKbCheckPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Check a knowledge base:param kb_run: KBRun details:return: Status
 * @summary Kb Check Endpoint
 * {@link /kb/check}
 */
export async function kbCheckEndpointKbCheckPost(
  data: KbCheckEndpointKbCheckPostMutationRequest,
  config: Partial<RequestConfig<KbCheckEndpointKbCheckPostMutationRequest>> = {},
) {
  const res = await client<KbCheckEndpointKbCheckPostMutationResponse, KbCheckEndpointKbCheckPost422, KbCheckEndpointKbCheckPostMutationRequest>({
    method: 'POST',
    url: `/kb/check`,
    data,
    ...config,
  })
  return res
}