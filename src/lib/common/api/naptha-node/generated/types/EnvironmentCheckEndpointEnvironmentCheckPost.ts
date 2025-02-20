import type { EnvironmentRunInput } from './EnvironmentRunInput.ts'
import type { EnvironmentRunOutput } from './EnvironmentRunOutput.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

/**
 * @description Successful Response
 */
export type EnvironmentCheckEndpointEnvironmentCheckPost200 = EnvironmentRunOutput

/**
 * @description Validation Error
 */
export type EnvironmentCheckEndpointEnvironmentCheckPost422 = HTTPValidationError

export type EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest = EnvironmentRunInput

export type EnvironmentCheckEndpointEnvironmentCheckPostMutationResponse = EnvironmentCheckEndpointEnvironmentCheckPost200

export type EnvironmentCheckEndpointEnvironmentCheckPostMutation = {
  Response: EnvironmentCheckEndpointEnvironmentCheckPost200
  Request: EnvironmentCheckEndpointEnvironmentCheckPostMutationRequest
  Errors: EnvironmentCheckEndpointEnvironmentCheckPost422
}