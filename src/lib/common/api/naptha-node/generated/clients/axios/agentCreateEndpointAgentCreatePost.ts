/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  AgentCreateEndpointAgentCreatePostMutationRequest,
  AgentCreateEndpointAgentCreatePostMutationResponse,
  AgentCreateEndpointAgentCreatePost422,
} from '../../types/AgentCreateEndpointAgentCreatePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getAgentCreateEndpointAgentCreatePostUrl() {
  return `/agent/create` as const
}

/**
 * @description Create an agent:param agent_input: AgentDeployment:return: AgentDeployment
 * @summary Agent Create Endpoint
 * {@link /agent/create}
 */
export async function agentCreateEndpointAgentCreatePost(
  data: AgentCreateEndpointAgentCreatePostMutationRequest,
  config: Partial<RequestConfig<AgentCreateEndpointAgentCreatePostMutationRequest>> = {},
) {
  const res = await client<
    AgentCreateEndpointAgentCreatePostMutationResponse,
    ResponseErrorConfig<AgentCreateEndpointAgentCreatePost422>,
    AgentCreateEndpointAgentCreatePostMutationRequest
  >({ method: 'POST', url: getAgentCreateEndpointAgentCreatePostUrl().toString(), data, ...config })
  return res
}