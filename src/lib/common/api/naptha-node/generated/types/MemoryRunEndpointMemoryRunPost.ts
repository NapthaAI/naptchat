import type { HttpValidationError } from './HttpValidationError.ts'
import type { MemoryRunInput } from './MemoryRunInput.ts'
import type { MemoryRunOutput } from './MemoryRunOutput.ts'

/**
 * @description Successful Response
 */
export type MemoryRunEndpointMemoryRunPost200 = MemoryRunOutput

/**
 * @description Validation Error
 */
export type MemoryRunEndpointMemoryRunPost422 = HttpValidationError

export type MemoryRunEndpointMemoryRunPostMutationRequest = MemoryRunInput

export type MemoryRunEndpointMemoryRunPostMutationResponse = MemoryRunEndpointMemoryRunPost200

export type MemoryRunEndpointMemoryRunPostMutation = {
  Response: MemoryRunEndpointMemoryRunPost200
  Request: MemoryRunEndpointMemoryRunPostMutationRequest
  Errors: MemoryRunEndpointMemoryRunPost422
}