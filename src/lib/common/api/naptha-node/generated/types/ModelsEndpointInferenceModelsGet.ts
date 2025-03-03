import type { HTTPValidationError } from './HTTPValidationError.ts'

export type ModelsEndpointInferenceModelsGetQueryParams = {
  /**
   * @default false
   */
  return_wildcard_routes?: boolean | null
}

/**
 * @description Successful Response
 */
export type ModelsEndpointInferenceModelsGet200 = any

/**
 * @description Validation Error
 */
export type ModelsEndpointInferenceModelsGet422 = HTTPValidationError

export type ModelsEndpointInferenceModelsGetQueryResponse = ModelsEndpointInferenceModelsGet200

export type ModelsEndpointInferenceModelsGetQuery = {
  Response: ModelsEndpointInferenceModelsGet200
  QueryParams: ModelsEndpointInferenceModelsGetQueryParams
  Errors: ModelsEndpointInferenceModelsGet422
}