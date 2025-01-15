import type { AgentRunInput } from './AgentRunInput.ts'
import type { AgentRunOutput } from './AgentRunOutput.ts'
import type { HttpValidationError } from './HttpValidationError.ts'

/**
 * @description Successful Response
 */
export type AgentRunEndpointAgentRunPost200 = AgentRunOutput

/**
 * @description Validation Error
 */
export type AgentRunEndpointAgentRunPost422 = HttpValidationError

export type AgentRunEndpointAgentRunPostMutationRequest = AgentRunInput

export type AgentRunEndpointAgentRunPostMutationResponse = AgentRunEndpointAgentRunPost200

export type AgentRunEndpointAgentRunPostMutation = {
  Response: AgentRunEndpointAgentRunPost200
  Request: AgentRunEndpointAgentRunPostMutationRequest
  Errors: AgentRunEndpointAgentRunPost422
}