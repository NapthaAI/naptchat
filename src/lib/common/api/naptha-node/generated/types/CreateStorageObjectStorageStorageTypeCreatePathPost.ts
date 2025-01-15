import type { BodyCreateStorageObjectStorageStorageTypeCreatePathPost } from './BodyCreateStorageObjectStorageStorageTypeCreatePathPost.ts'
import type { HttpValidationError } from './HttpValidationError.ts'
import type { StorageType } from './StorageType.ts'

export type CreateStorageObjectStorageStorageTypeCreatePathPostPathParams = {
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

/**
 * @description Successful Response
 */
export type CreateStorageObjectStorageStorageTypeCreatePathPost200 = any

/**
 * @description Validation Error
 */
export type CreateStorageObjectStorageStorageTypeCreatePathPost422 = HttpValidationError

export type CreateStorageObjectStorageStorageTypeCreatePathPostMutationRequest = BodyCreateStorageObjectStorageStorageTypeCreatePathPost

export type CreateStorageObjectStorageStorageTypeCreatePathPostMutationResponse = CreateStorageObjectStorageStorageTypeCreatePathPost200

export type CreateStorageObjectStorageStorageTypeCreatePathPostMutation = {
  Response: CreateStorageObjectStorageStorageTypeCreatePathPost200
  Request: CreateStorageObjectStorageStorageTypeCreatePathPostMutationRequest
  PathParams: CreateStorageObjectStorageStorageTypeCreatePathPostPathParams
  Errors: CreateStorageObjectStorageStorageTypeCreatePathPost422
}