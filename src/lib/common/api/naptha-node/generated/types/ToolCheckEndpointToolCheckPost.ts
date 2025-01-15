import type { HttpValidationError } from './HttpValidationError.ts'
import type { ToolRunInput } from './ToolRunInput.ts'
import type { ToolRunOutput } from './ToolRunOutput.ts'

/**
 * @description Successful Response
 */
export type ToolCheckEndpointToolCheckPost200 = ToolRunOutput

/**
 * @description Validation Error
 */
export type ToolCheckEndpointToolCheckPost422 = HttpValidationError

export type ToolCheckEndpointToolCheckPostMutationRequest = ToolRunInput

export type ToolCheckEndpointToolCheckPostMutationResponse = ToolCheckEndpointToolCheckPost200

export type ToolCheckEndpointToolCheckPostMutation = {
  Response: ToolCheckEndpointToolCheckPost200
  Request: ToolCheckEndpointToolCheckPostMutationRequest
  Errors: ToolCheckEndpointToolCheckPost422
}