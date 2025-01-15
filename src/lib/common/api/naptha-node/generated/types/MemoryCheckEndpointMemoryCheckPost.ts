import type { HttpValidationError } from './HttpValidationError.ts'
import type { MemoryRunInput } from './MemoryRunInput.ts'
import type { MemoryRunOutput } from './MemoryRunOutput.ts'

/**
 * @description Successful Response
 */
export type MemoryCheckEndpointMemoryCheckPost200 = MemoryRunOutput

/**
 * @description Validation Error
 */
export type MemoryCheckEndpointMemoryCheckPost422 = HttpValidationError

export type MemoryCheckEndpointMemoryCheckPostMutationRequest = MemoryRunInput

export type MemoryCheckEndpointMemoryCheckPostMutationResponse = MemoryCheckEndpointMemoryCheckPost200

export type MemoryCheckEndpointMemoryCheckPostMutation = {
  Response: MemoryCheckEndpointMemoryCheckPost200
  Request: MemoryCheckEndpointMemoryCheckPostMutationRequest
  Errors: MemoryCheckEndpointMemoryCheckPost422
}