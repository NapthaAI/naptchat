import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { OrchestratorDeploymentInput } from './OrchestratorDeploymentInput.ts'
import type { OrchestratorDeploymentOutput } from './OrchestratorDeploymentOutput.ts'

/**
 * @description Successful Response
 */
export type OrchestratorCreateEndpointOrchestratorCreatePost200 = OrchestratorDeploymentOutput

/**
 * @description Validation Error
 */
export type OrchestratorCreateEndpointOrchestratorCreatePost422 = HTTPValidationError

export type OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest = OrchestratorDeploymentInput

export type OrchestratorCreateEndpointOrchestratorCreatePostMutationResponse = OrchestratorCreateEndpointOrchestratorCreatePost200

export type OrchestratorCreateEndpointOrchestratorCreatePostMutation = {
  Response: OrchestratorCreateEndpointOrchestratorCreatePost200
  Request: OrchestratorCreateEndpointOrchestratorCreatePostMutationRequest
  Errors: OrchestratorCreateEndpointOrchestratorCreatePost422
}