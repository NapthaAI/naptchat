import type { HTTPValidationError } from './HTTPValidationError.ts'

/**
 * @description Successful Response
 */
export type UserRegisterEndpointUserRegisterPost200 = any

/**
 * @description Validation Error
 */
export type UserRegisterEndpointUserRegisterPost422 = HTTPValidationError

export type UserRegisterEndpointUserRegisterPostMutationRequest = object

export type UserRegisterEndpointUserRegisterPostMutationResponse = UserRegisterEndpointUserRegisterPost200

export type UserRegisterEndpointUserRegisterPostMutation = {
  Response: UserRegisterEndpointUserRegisterPost200
  Request: UserRegisterEndpointUserRegisterPostMutationRequest
  Errors: UserRegisterEndpointUserRegisterPost422
}