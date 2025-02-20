/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  OrchestratorRunEndpointOrchestratorRunPostMutationRequest,
  OrchestratorRunEndpointOrchestratorRunPostMutationResponse,
  OrchestratorRunEndpointOrchestratorRunPost422,
} from '../../types/OrchestratorRunEndpointOrchestratorRunPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getOrchestratorRunEndpointOrchestratorRunPostUrl() {
  return `/orchestrator/run` as const
}

/**
 * @description Run an agent orchestrator:param orchestrator_run_input: Orchestrator run specifications:return: Status
 * @summary Orchestrator Run Endpoint
 * {@link /orchestrator/run}
 */
export async function orchestratorRunEndpointOrchestratorRunPost(
  data: OrchestratorRunEndpointOrchestratorRunPostMutationRequest,
  config: Partial<RequestConfig<OrchestratorRunEndpointOrchestratorRunPostMutationRequest>> = {},
) {
  const res = await client<
    OrchestratorRunEndpointOrchestratorRunPostMutationResponse,
    ResponseErrorConfig<OrchestratorRunEndpointOrchestratorRunPost422>,
    OrchestratorRunEndpointOrchestratorRunPostMutationRequest
  >({ method: 'POST', url: getOrchestratorRunEndpointOrchestratorRunPostUrl().toString(), data, ...config })
  return res
}