import type { AgentRunInput } from './AgentRunInput.ts'
import type { AgentRunOutput } from './AgentRunOutput.ts'
import type { HttpValidationError } from './HttpValidationError.ts'

/**
 * @description Successful Response
 */
export type AgentCheckEndpointAgentCheckPost200 = AgentRunOutput

/**
 * @description Validation Error
 */
export type AgentCheckEndpointAgentCheckPost422 = HttpValidationError

export type AgentCheckEndpointAgentCheckPostMutationRequest = AgentRunInput

export type AgentCheckEndpointAgentCheckPostMutationResponse = AgentCheckEndpointAgentCheckPost200

export type AgentCheckEndpointAgentCheckPostMutation = {
  Response: AgentCheckEndpointAgentCheckPost200
  Request: AgentCheckEndpointAgentCheckPostMutationRequest
  Errors: AgentCheckEndpointAgentCheckPost422
}