import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { KBRunInput } from './KBRunInput.ts'
import type { KBRunOutput } from './KBRunOutput.ts'

/**
 * @description Successful Response
 */
export type KbCheckEndpointKbCheckPost200 = KBRunOutput

/**
 * @description Validation Error
 */
export type KbCheckEndpointKbCheckPost422 = HTTPValidationError

export type KbCheckEndpointKbCheckPostMutationRequest = KBRunInput

export type KbCheckEndpointKbCheckPostMutationResponse = KbCheckEndpointKbCheckPost200

export type KbCheckEndpointKbCheckPostMutation = {
  Response: KbCheckEndpointKbCheckPost200
  Request: KbCheckEndpointKbCheckPostMutationRequest
  Errors: KbCheckEndpointKbCheckPost422
}