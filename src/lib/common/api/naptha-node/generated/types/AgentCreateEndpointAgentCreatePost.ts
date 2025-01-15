import type { AgentDeploymentInput } from './AgentDeploymentInput.ts'
import type { AgentDeploymentOutput } from './AgentDeploymentOutput.ts'
import type { HttpValidationError } from './HttpValidationError.ts'

/**
 * @description Successful Response
 */
export type AgentCreateEndpointAgentCreatePost200 = AgentDeploymentOutput

/**
 * @description Validation Error
 */
export type AgentCreateEndpointAgentCreatePost422 = HttpValidationError

export type AgentCreateEndpointAgentCreatePostMutationRequest = AgentDeploymentInput

export type AgentCreateEndpointAgentCreatePostMutationResponse = AgentCreateEndpointAgentCreatePost200

export type AgentCreateEndpointAgentCreatePostMutation = {
  Response: AgentCreateEndpointAgentCreatePost200
  Request: AgentCreateEndpointAgentCreatePostMutationRequest
  Errors: AgentCreateEndpointAgentCreatePost422
}