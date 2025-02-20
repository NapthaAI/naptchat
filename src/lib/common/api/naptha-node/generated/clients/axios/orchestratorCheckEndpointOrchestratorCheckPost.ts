/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest,
  OrchestratorCheckEndpointOrchestratorCheckPostMutationResponse,
  OrchestratorCheckEndpointOrchestratorCheckPost422,
} from '../../types/OrchestratorCheckEndpointOrchestratorCheckPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getOrchestratorCheckEndpointOrchestratorCheckPostUrl() {
  return `/orchestrator/check` as const
}

/**
 * @description Check an orchestrator:param orchestrator_run: OrchestratorRun details:return: Status
 * @summary Orchestrator Check Endpoint
 * {@link /orchestrator/check}
 */
export async function orchestratorCheckEndpointOrchestratorCheckPost(
  data: OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest,
  config: Partial<RequestConfig<OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest>> = {},
) {
  const res = await client<
    OrchestratorCheckEndpointOrchestratorCheckPostMutationResponse,
    ResponseErrorConfig<OrchestratorCheckEndpointOrchestratorCheckPost422>,
    OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest
  >({ method: 'POST', url: getOrchestratorCheckEndpointOrchestratorCheckPostUrl().toString(), data, ...config })
  return res
}