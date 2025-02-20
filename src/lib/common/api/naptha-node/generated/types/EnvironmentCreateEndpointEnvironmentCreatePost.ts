import type { EnvironmentDeploymentInput } from './EnvironmentDeploymentInput.ts'
import type { EnvironmentDeploymentOutput } from './EnvironmentDeploymentOutput.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

/**
 * @description Successful Response
 */
export type EnvironmentCreateEndpointEnvironmentCreatePost200 = EnvironmentDeploymentOutput

/**
 * @description Validation Error
 */
export type EnvironmentCreateEndpointEnvironmentCreatePost422 = HTTPValidationError

export type EnvironmentCreateEndpointEnvironmentCreatePostMutationRequest = EnvironmentDeploymentInput

export type EnvironmentCreateEndpointEnvironmentCreatePostMutationResponse = EnvironmentCreateEndpointEnvironmentCreatePost200

export type EnvironmentCreateEndpointEnvironmentCreatePostMutation = {
  Response: EnvironmentCreateEndpointEnvironmentCreatePost200
  Request: EnvironmentCreateEndpointEnvironmentCreatePostMutationRequest
  Errors: EnvironmentCreateEndpointEnvironmentCreatePost422
}