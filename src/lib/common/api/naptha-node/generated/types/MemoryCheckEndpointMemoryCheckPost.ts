import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { MemoryRunInput } from './MemoryRunInput.ts'
import type { MemoryRunOutput } from './MemoryRunOutput.ts'

/**
 * @description Successful Response
 */
export type MemoryCheckEndpointMemoryCheckPost200 = MemoryRunOutput

/**
 * @description Validation Error
 */
export type MemoryCheckEndpointMemoryCheckPost422 = HTTPValidationError

export type MemoryCheckEndpointMemoryCheckPostMutationRequest = MemoryRunInput

export type MemoryCheckEndpointMemoryCheckPostMutationResponse = MemoryCheckEndpointMemoryCheckPost200

export type MemoryCheckEndpointMemoryCheckPostMutation = {
  Response: MemoryCheckEndpointMemoryCheckPost200
  Request: MemoryCheckEndpointMemoryCheckPostMutationRequest
  Errors: MemoryCheckEndpointMemoryCheckPost422
}