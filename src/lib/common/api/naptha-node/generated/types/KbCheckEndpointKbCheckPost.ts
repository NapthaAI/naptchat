import type { HttpValidationError } from './HttpValidationError.ts'
import type { KbRunInput } from './KbRunInput.ts'
import type { KbRunOutput } from './KbRunOutput.ts'

/**
 * @description Successful Response
 */
export type KbCheckEndpointKbCheckPost200 = KbRunOutput

/**
 * @description Validation Error
 */
export type KbCheckEndpointKbCheckPost422 = HttpValidationError

export type KbCheckEndpointKbCheckPostMutationRequest = KbRunInput

export type KbCheckEndpointKbCheckPostMutationResponse = KbCheckEndpointKbCheckPost200

export type KbCheckEndpointKbCheckPostMutation = {
  Response: KbCheckEndpointKbCheckPost200
  Request: KbCheckEndpointKbCheckPostMutationRequest
  Errors: KbCheckEndpointKbCheckPost422
}