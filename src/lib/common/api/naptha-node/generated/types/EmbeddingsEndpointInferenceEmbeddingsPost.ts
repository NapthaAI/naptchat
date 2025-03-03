import type { EmbeddingsRequest } from './EmbeddingsRequest.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

export type EmbeddingsEndpointInferenceEmbeddingsPostQueryParams = {
  /**
   * @description Model
   */
  model?: string | null
}

/**
 * @description Successful Response
 */
export type EmbeddingsEndpointInferenceEmbeddingsPost200 = any

/**
 * @description Validation Error
 */
export type EmbeddingsEndpointInferenceEmbeddingsPost422 = HTTPValidationError

export type EmbeddingsEndpointInferenceEmbeddingsPostMutationRequest = EmbeddingsRequest

export type EmbeddingsEndpointInferenceEmbeddingsPostMutationResponse = EmbeddingsEndpointInferenceEmbeddingsPost200

export type EmbeddingsEndpointInferenceEmbeddingsPostMutation = {
  Response: EmbeddingsEndpointInferenceEmbeddingsPost200
  Request: EmbeddingsEndpointInferenceEmbeddingsPostMutationRequest
  QueryParams: EmbeddingsEndpointInferenceEmbeddingsPostQueryParams
  Errors: EmbeddingsEndpointInferenceEmbeddingsPost422
}