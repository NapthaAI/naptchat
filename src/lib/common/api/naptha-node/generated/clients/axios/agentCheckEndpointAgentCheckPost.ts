/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  AgentCheckEndpointAgentCheckPostMutationRequest,
  AgentCheckEndpointAgentCheckPostMutationResponse,
  AgentCheckEndpointAgentCheckPost422,
} from '../../types/AgentCheckEndpointAgentCheckPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getAgentCheckEndpointAgentCheckPostUrl() {
  return `/agent/check` as const
}

/**
 * @description Check an agent:param agent_run: AgentRun details:return: Status
 * @summary Agent Check Endpoint
 * {@link /agent/check}
 */
export async function agentCheckEndpointAgentCheckPost(
  data: AgentCheckEndpointAgentCheckPostMutationRequest,
  config: Partial<RequestConfig<AgentCheckEndpointAgentCheckPostMutationRequest>> = {},
) {
  const res = await client<
    AgentCheckEndpointAgentCheckPostMutationResponse,
    ResponseErrorConfig<AgentCheckEndpointAgentCheckPost422>,
    AgentCheckEndpointAgentCheckPostMutationRequest
  >({ method: 'POST', url: getAgentCheckEndpointAgentCheckPostUrl().toString(), data, ...config })
  return res
}