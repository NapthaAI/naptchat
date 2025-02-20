import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { ToolRunInput } from './ToolRunInput.ts'
import type { ToolRunOutput } from './ToolRunOutput.ts'

/**
 * @description Successful Response
 */
export type ToolRunEndpointToolRunPost200 = ToolRunOutput

/**
 * @description Validation Error
 */
export type ToolRunEndpointToolRunPost422 = HTTPValidationError

export type ToolRunEndpointToolRunPostMutationRequest = ToolRunInput

export type ToolRunEndpointToolRunPostMutationResponse = ToolRunEndpointToolRunPost200

export type ToolRunEndpointToolRunPostMutation = {
  Response: ToolRunEndpointToolRunPost200
  Request: ToolRunEndpointToolRunPostMutationRequest
  Errors: ToolRunEndpointToolRunPost422
}