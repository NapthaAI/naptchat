/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  AgentRunEndpointAgentRunPostMutationRequest,
  AgentRunEndpointAgentRunPostMutationResponse,
  AgentRunEndpointAgentRunPost422,
} from '../../types/AgentRunEndpointAgentRunPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Run an agent:param agent_run_input: Agent run specifications:return: Status
 * @summary Agent Run Endpoint
 * {@link /agent/run}
 */
export async function agentRunEndpointAgentRunPost(
  data: AgentRunEndpointAgentRunPostMutationRequest,
  config: Partial<RequestConfig<AgentRunEndpointAgentRunPostMutationRequest>> = {},
) {
  const res = await client<AgentRunEndpointAgentRunPostMutationResponse, AgentRunEndpointAgentRunPost422, AgentRunEndpointAgentRunPostMutationRequest>({
    method: 'POST',
    url: `/agent/run`,
    data,
    ...config,
  })
  return res
}