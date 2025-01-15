/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  AgentCreateEndpointAgentCreatePostMutationRequest,
  AgentCreateEndpointAgentCreatePostMutationResponse,
  AgentCreateEndpointAgentCreatePost422,
} from '../../types/AgentCreateEndpointAgentCreatePost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

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
    AgentCreateEndpointAgentCreatePost422,
    AgentCreateEndpointAgentCreatePostMutationRequest
  >({ method: 'POST', url: `/agent/create`, data, ...config })
  return res
}