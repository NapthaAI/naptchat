import type { BodyUpdateStorageObjectStorageStorageTypeUpdatePathPut } from './BodyUpdateStorageObjectStorageStorageTypeUpdatePathPut.ts'
import type { HttpValidationError } from './HttpValidationError.ts'
import type { StorageType } from './StorageType.ts'

export type UpdateStorageObjectStorageStorageTypeUpdatePathPutPathParams = {
  /**
   * @type string
   */
  storage_type: StorageType
  /**
   * @description Storage path/identifier
   * @type string
   */
  path: string
}

export type UpdateStorageObjectStorageStorageTypeUpdatePathPutQueryParams = {
  /**
   * @description Update condition (JSON string)
   */
  condition?: string | null
}

/**
 * @description Successful Response
 */
export type UpdateStorageObjectStorageStorageTypeUpdatePathPut200 = any

/**
 * @description Validation Error
 */
export type UpdateStorageObjectStorageStorageTypeUpdatePathPut422 = HttpValidationError

export type UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationRequest = BodyUpdateStorageObjectStorageStorageTypeUpdatePathPut

export type UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationResponse = UpdateStorageObjectStorageStorageTypeUpdatePathPut200

export type UpdateStorageObjectStorageStorageTypeUpdatePathPutMutation = {
  Response: UpdateStorageObjectStorageStorageTypeUpdatePathPut200
  Request: UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationRequest
  PathParams: UpdateStorageObjectStorageStorageTypeUpdatePathPutPathParams
  QueryParams: UpdateStorageObjectStorageStorageTypeUpdatePathPutQueryParams
  Errors: UpdateStorageObjectStorageStorageTypeUpdatePathPut422
}