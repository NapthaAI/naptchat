import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { MemoryDeploymentInput } from './MemoryDeploymentInput.ts'
import type { MemoryDeploymentOutput } from './MemoryDeploymentOutput.ts'

/**
 * @description Successful Response
 */
export type MemoryCreateEndpointMemoryCreatePost200 = MemoryDeploymentOutput

/**
 * @description Validation Error
 */
export type MemoryCreateEndpointMemoryCreatePost422 = HTTPValidationError

export type MemoryCreateEndpointMemoryCreatePostMutationRequest = MemoryDeploymentInput

export type MemoryCreateEndpointMemoryCreatePostMutationResponse = MemoryCreateEndpointMemoryCreatePost200

export type MemoryCreateEndpointMemoryCreatePostMutation = {
  Response: MemoryCreateEndpointMemoryCreatePost200
  Request: MemoryCreateEndpointMemoryCreatePostMutationRequest
  Errors: MemoryCreateEndpointMemoryCreatePost422
}