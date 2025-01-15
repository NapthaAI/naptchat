import type { BodySearchStorageObjectsStorageStorageTypeSearchPost } from './BodySearchStorageObjectsStorageStorageTypeSearchPost.ts'
import type { HttpValidationError } from './HttpValidationError.ts'
import type { StorageType } from './StorageType.ts'

export type SearchStorageObjectsStorageStorageTypeSearchPostPathParams = {
  /**
   * @type string
   */
  storage_type: StorageType
}

export type SearchStorageObjectsStorageStorageTypeSearchPostQueryParams = {
  /**
   * @description Result limit
   */
  limit?: number | null
}

/**
 * @description Successful Response
 */
export type SearchStorageObjectsStorageStorageTypeSearchPost200 = any

/**
 * @description Validation Error
 */
export type SearchStorageObjectsStorageStorageTypeSearchPost422 = HttpValidationError

export type SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest = BodySearchStorageObjectsStorageStorageTypeSearchPost

export type SearchStorageObjectsStorageStorageTypeSearchPostMutationResponse = SearchStorageObjectsStorageStorageTypeSearchPost200

export type SearchStorageObjectsStorageStorageTypeSearchPostMutation = {
  Response: SearchStorageObjectsStorageStorageTypeSearchPost200
  Request: SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest
  PathParams: SearchStorageObjectsStorageStorageTypeSearchPostPathParams
  QueryParams: SearchStorageObjectsStorageStorageTypeSearchPostQueryParams
  Errors: SearchStorageObjectsStorageStorageTypeSearchPost422
}