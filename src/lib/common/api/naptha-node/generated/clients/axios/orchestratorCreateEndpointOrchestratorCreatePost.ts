/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest,
  OrchestratorCreateEndpointOrchestratorCreatePostMutationResponse,
  OrchestratorCreateEndpointOrchestratorCreatePost422,
} from '../../types/OrchestratorCreateEndpointOrchestratorCreatePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getOrchestratorCreateEndpointOrchestratorCreatePostUrl() {
  return `/orchestrator/create` as const
}

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
    ResponseErrorConfig<OrchestratorCreateEndpointOrchestratorCreatePost422>,
    OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest
  >({ method: 'POST', url: getOrchestratorCreateEndpointOrchestratorCreatePostUrl().toString(), data, ...config })
  return res
}