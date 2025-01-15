import type { EnvironmentRunInput } from './EnvironmentRunInput.ts'
import type { EnvironmentRunOutput } from './EnvironmentRunOutput.ts'
import type { HttpValidationError } from './HttpValidationError.ts'

/**
 * @description Successful Response
 */
export type EnvironmentRunEndpointEnvironmentRunPost200 = EnvironmentRunOutput

/**
 * @description Validation Error
 */
export type EnvironmentRunEndpointEnvironmentRunPost422 = HttpValidationError

export type EnvironmentRunEndpointEnvironmentRunPostMutationRequest = EnvironmentRunInput

export type EnvironmentRunEndpointEnvironmentRunPostMutationResponse = EnvironmentRunEndpointEnvironmentRunPost200

export type EnvironmentRunEndpointEnvironmentRunPostMutation = {
  Response: EnvironmentRunEndpointEnvironmentRunPost200
  Request: EnvironmentRunEndpointEnvironmentRunPostMutationRequest
  Errors: EnvironmentRunEndpointEnvironmentRunPost422
}