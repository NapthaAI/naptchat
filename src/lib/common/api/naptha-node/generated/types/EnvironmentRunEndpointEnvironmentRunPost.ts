import type { EnvironmentRunInput } from './EnvironmentRunInput.ts'
import type { EnvironmentRunOutput } from './EnvironmentRunOutput.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

/**
 * @description Successful Response
 */
export type EnvironmentRunEndpointEnvironmentRunPost200 = EnvironmentRunOutput

/**
 * @description Validation Error
 */
export type EnvironmentRunEndpointEnvironmentRunPost422 = HTTPValidationError

export type EnvironmentRunEndpointEnvironmentRunPostMutationRequest = EnvironmentRunInput

export type EnvironmentRunEndpointEnvironmentRunPostMutationResponse = EnvironmentRunEndpointEnvironmentRunPost200

export type EnvironmentRunEndpointEnvironmentRunPostMutation = {
  Response: EnvironmentRunEndpointEnvironmentRunPost200
  Request: EnvironmentRunEndpointEnvironmentRunPostMutationRequest
  Errors: EnvironmentRunEndpointEnvironmentRunPost422
}