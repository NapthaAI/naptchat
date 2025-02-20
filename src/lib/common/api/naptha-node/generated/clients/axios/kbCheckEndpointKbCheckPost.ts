/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  KbCheckEndpointKbCheckPostMutationRequest,
  KbCheckEndpointKbCheckPostMutationResponse,
  KbCheckEndpointKbCheckPost422,
} from '../../types/KbCheckEndpointKbCheckPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getKbCheckEndpointKbCheckPostUrl() {
  return `/kb/check` as const
}

/**
 * @description Check a knowledge base:param kb_run: KBRun details:return: Status
 * @summary Kb Check Endpoint
 * {@link /kb/check}
 */
export async function kbCheckEndpointKbCheckPost(
  data: KbCheckEndpointKbCheckPostMutationRequest,
  config: Partial<RequestConfig<KbCheckEndpointKbCheckPostMutationRequest>> = {},
) {
  const res = await client<
    KbCheckEndpointKbCheckPostMutationResponse,
    ResponseErrorConfig<KbCheckEndpointKbCheckPost422>,
    KbCheckEndpointKbCheckPostMutationRequest
  >({ method: 'POST', url: getKbCheckEndpointKbCheckPostUrl().toString(), data, ...config })
  return res
}