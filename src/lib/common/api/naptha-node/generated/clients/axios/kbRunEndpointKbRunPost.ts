/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  KbRunEndpointKbRunPostMutationRequest,
  KbRunEndpointKbRunPostMutationResponse,
  KbRunEndpointKbRunPost422,
} from '../../types/KbRunEndpointKbRunPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getKbRunEndpointKbRunPostUrl() {
  return `/kb/run` as const
}

/**
 * @description Run a knowledge base:param kb_run_input: KBRunInput:return: KBRun
 * @summary Kb Run Endpoint
 * {@link /kb/run}
 */
export async function kbRunEndpointKbRunPost(
  data: KbRunEndpointKbRunPostMutationRequest,
  config: Partial<RequestConfig<KbRunEndpointKbRunPostMutationRequest>> = {},
) {
  const res = await client<KbRunEndpointKbRunPostMutationResponse, ResponseErrorConfig<KbRunEndpointKbRunPost422>, KbRunEndpointKbRunPostMutationRequest>({
    method: 'POST',
    url: getKbRunEndpointKbRunPostUrl().toString(),
    data,
    ...config,
  })
  return res
}