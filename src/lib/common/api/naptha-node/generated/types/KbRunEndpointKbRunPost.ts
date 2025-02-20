import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { KBRunInput } from './KBRunInput.ts'
import type { KBRunOutput } from './KBRunOutput.ts'

/**
 * @description Successful Response
 */
export type KbRunEndpointKbRunPost200 = KBRunOutput

/**
 * @description Validation Error
 */
export type KbRunEndpointKbRunPost422 = HTTPValidationError

export type KbRunEndpointKbRunPostMutationRequest = KBRunInput

export type KbRunEndpointKbRunPostMutationResponse = KbRunEndpointKbRunPost200

export type KbRunEndpointKbRunPostMutation = {
  Response: KbRunEndpointKbRunPost200
  Request: KbRunEndpointKbRunPostMutationRequest
  Errors: KbRunEndpointKbRunPost422
}