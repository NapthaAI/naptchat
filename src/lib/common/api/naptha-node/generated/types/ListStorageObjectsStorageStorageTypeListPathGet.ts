import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { StorageType } from './StorageType.ts'

export type ListStorageObjectsStorageStorageTypeListPathGetPathParams = {
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

export type ListStorageObjectsStorageStorageTypeListPathGetQueryParams = {
  /**
   * @description JSON string of options
   */
  options?: string | null
}

/**
 * @description Successful Response
 */
export type ListStorageObjectsStorageStorageTypeListPathGet200 = any

/**
 * @description Validation Error
 */
export type ListStorageObjectsStorageStorageTypeListPathGet422 = HTTPValidationError

export type ListStorageObjectsStorageStorageTypeListPathGetQueryResponse = ListStorageObjectsStorageStorageTypeListPathGet200

export type ListStorageObjectsStorageStorageTypeListPathGetQuery = {
  Response: ListStorageObjectsStorageStorageTypeListPathGet200
  PathParams: ListStorageObjectsStorageStorageTypeListPathGetPathParams
  QueryParams: ListStorageObjectsStorageStorageTypeListPathGetQueryParams
  Errors: ListStorageObjectsStorageStorageTypeListPathGet422
}