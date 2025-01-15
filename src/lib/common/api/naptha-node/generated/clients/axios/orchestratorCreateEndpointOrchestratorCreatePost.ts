/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest,
  OrchestratorCreateEndpointOrchestratorCreatePostMutationResponse,
  OrchestratorCreateEndpointOrchestratorCreatePost422,
} from '../../types/OrchestratorCreateEndpointOrchestratorCreatePost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Create an agent orchestrator:param orchestrator_input: OrchestratorDeployment:return: OrchestratorDeployment
 * @summary Orchestrator Create Endpoint
 * {@link /orchestrator/create}
 */
export async function orchestratorCreateEndpointOrchestratorCreatePost(
  data: OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest,
  config: Partial<RequestConfig<OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest>> = {},
) {
  const res = await client<
    OrchestratorCreateEndpointOrchestratorCreatePostMutationResponse,
    OrchestratorCreateEndpointOrchestratorCreatePost422,
    OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest
  >({ method: 'POST', url: `/orchestrator/create`, data, ...config })
  return res
}