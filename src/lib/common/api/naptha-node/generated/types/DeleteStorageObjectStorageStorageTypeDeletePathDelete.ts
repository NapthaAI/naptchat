import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { StorageType } from './StorageType.ts'

export type DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams = {
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

export type DeleteStorageObjectStorageStorageTypeDeletePathDeleteQueryParams = {
  /**
   * @description Delete condition for DB (JSON string)
   */
  condition?: string | null
  /**
   * @description Storage-specific options (JSON string)
   */
  options?: string | null
}

/**
 * @description Successful Response
 */
export type DeleteStorageObjectStorageStorageTypeDeletePathDelete200 = any

/**
 * @description Validation Error
 */
export type DeleteStorageObjectStorageStorageTypeDeletePathDelete422 = HTTPValidationError

export type DeleteStorageObjectStorageStorageTypeDeletePathDeleteMutationResponse = DeleteStorageObjectStorageStorageTypeDeletePathDelete200

export type DeleteStorageObjectStorageStorageTypeDeletePathDeleteMutation = {
  Response: DeleteStorageObjectStorageStorageTypeDeletePathDelete200
  PathParams: DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams
  QueryParams: DeleteStorageObjectStorageStorageTypeDeletePathDeleteQueryParams
  Errors: DeleteStorageObjectStorageStorageTypeDeletePathDelete422
}