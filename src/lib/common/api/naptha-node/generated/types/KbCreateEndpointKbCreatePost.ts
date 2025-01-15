import type { HttpValidationError } from './HttpValidationError.ts'
import type { KbDeploymentInput } from './KbDeploymentInput.ts'
import type { KbDeploymentOutput } from './KbDeploymentOutput.ts'

/**
 * @description Successful Response
 */
export type KbCreateEndpointKbCreatePost200 = KbDeploymentOutput

/**
 * @description Validation Error
 */
export type KbCreateEndpointKbCreatePost422 = HttpValidationError

export type KbCreateEndpointKbCreatePostMutationRequest = KbDeploymentInput

export type KbCreateEndpointKbCreatePostMutationResponse = KbCreateEndpointKbCreatePost200

export type KbCreateEndpointKbCreatePostMutation = {
  Response: KbCreateEndpointKbCreatePost200
  Request: KbCreateEndpointKbCreatePostMutationRequest
  Errors: KbCreateEndpointKbCreatePost422
}