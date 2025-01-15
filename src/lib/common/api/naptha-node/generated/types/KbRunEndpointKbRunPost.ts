import type { HttpValidationError } from './HttpValidationError.ts'
import type { KbRunInput } from './KbRunInput.ts'
import type { KbRunOutput } from './KbRunOutput.ts'

/**
 * @description Successful Response
 */
export type KbRunEndpointKbRunPost200 = KbRunOutput

/**
 * @description Validation Error
 */
export type KbRunEndpointKbRunPost422 = HttpValidationError

export type KbRunEndpointKbRunPostMutationRequest = KbRunInput

export type KbRunEndpointKbRunPostMutationResponse = KbRunEndpointKbRunPost200

export type KbRunEndpointKbRunPostMutation = {
  Response: KbRunEndpointKbRunPost200
  Request: KbRunEndpointKbRunPostMutationRequest
  Errors: KbRunEndpointKbRunPost422
}