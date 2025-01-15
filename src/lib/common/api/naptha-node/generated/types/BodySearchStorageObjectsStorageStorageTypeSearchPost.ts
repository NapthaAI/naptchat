export type BodySearchStorageObjectsStorageStorageTypeSearchPost = {
  /**
   * @description Storage path/identifier
   * @type string
   */
  path: string
  /**
   * @description Search query
   */
  query: string | object | number[]
  /**
   * @description Query type (text, vector, metadata)
   * @default "text"
   */
  query_type?: string | null
  /**
   * @description Storage-specific options
   */
  options?: object | null
}