/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  OrchestratorRunEndpointOrchestratorRunPostMutationRequest,
  OrchestratorRunEndpointOrchestratorRunPostMutationResponse,
  OrchestratorRunEndpointOrchestratorRunPost422,
} from '../../types/OrchestratorRunEndpointOrchestratorRunPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

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
    OrchestratorRunEndpointOrchestratorRunPost422,
    OrchestratorRunEndpointOrchestratorRunPostMutationRequest
  >({ method: 'POST', url: `/orchestrator/run`, data, ...config })
  return res
}