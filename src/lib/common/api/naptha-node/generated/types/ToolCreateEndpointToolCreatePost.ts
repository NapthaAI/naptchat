import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { ToolDeploymentInput } from './ToolDeploymentInput.ts'
import type { ToolDeploymentOutput } from './ToolDeploymentOutput.ts'

/**
 * @description Successful Response
 */
export type ToolCreateEndpointToolCreatePost200 = ToolDeploymentOutput

/**
 * @description Validation Error
 */
export type ToolCreateEndpointToolCreatePost422 = HTTPValidationError

export type ToolCreateEndpointToolCreatePostMutationRequest = ToolDeploymentInput

export type ToolCreateEndpointToolCreatePostMutationResponse = ToolCreateEndpointToolCreatePost200

export type ToolCreateEndpointToolCreatePostMutation = {
  Response: ToolCreateEndpointToolCreatePost200
  Request: ToolCreateEndpointToolCreatePostMutationRequest
  Errors: ToolCreateEndpointToolCreatePost422
}