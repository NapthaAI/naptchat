import type { StorageType } from './StorageType.ts'

export type KbConfig = {
  config_name?: string | null
  /**
   * @type string
   */
  storage_type: StorageType
  /**
   * @type string
   */
  path: string
  /**
   * @type object | undefined
   */
  schema?: object
  options?: object | null
}