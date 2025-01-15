import type { HttpValidationError } from './HttpValidationError.ts'
import type { StorageType } from './StorageType.ts'

export type ReadStorageObjectStorageStorageTypeReadPathGetPathParams = {
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

export type ReadStorageObjectStorageStorageTypeReadPathGetQueryParams = {
  /**
   * @description JSON string of options
   */
  options?: string | null
}

/**
 * @description Successful Response
 */
export type ReadStorageObjectStorageStorageTypeReadPathGet200 = any

/**
 * @description Validation Error
 */
export type ReadStorageObjectStorageStorageTypeReadPathGet422 = HttpValidationError

export type ReadStorageObjectStorageStorageTypeReadPathGetQueryResponse = ReadStorageObjectStorageStorageTypeReadPathGet200

export type ReadStorageObjectStorageStorageTypeReadPathGetQuery = {
  Response: ReadStorageObjectStorageStorageTypeReadPathGet200
  PathParams: ReadStorageObjectStorageStorageTypeReadPathGetPathParams
  QueryParams: ReadStorageObjectStorageStorageTypeReadPathGetQueryParams
  Errors: ReadStorageObjectStorageStorageTypeReadPathGet422
}