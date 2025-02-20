import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { KBDeploymentInput } from './KBDeploymentInput.ts'
import type { KBDeploymentOutput } from './KBDeploymentOutput.ts'

/**
 * @description Successful Response
 */
export type KbCreateEndpointKbCreatePost200 = KBDeploymentOutput

/**
 * @description Validation Error
 */
export type KbCreateEndpointKbCreatePost422 = HTTPValidationError

export type KbCreateEndpointKbCreatePostMutationRequest = KBDeploymentInput

export type KbCreateEndpointKbCreatePostMutationResponse = KbCreateEndpointKbCreatePost200

export type KbCreateEndpointKbCreatePostMutation = {
  Response: KbCreateEndpointKbCreatePost200
  Request: KbCreateEndpointKbCreatePostMutationRequest
  Errors: KbCreateEndpointKbCreatePost422
}