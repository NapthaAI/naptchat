import type { StorageType } from './StorageType.ts'

export type StorageConfig = {
  /**
   * @type string
   */
  storage_type: StorageType
  /**
   * @type string
   */
  path: string
  /**
   * @type object
   */
  storage_schema: object
  /**
   * @type object | undefined
   */
  options?: object
}