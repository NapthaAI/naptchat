/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  DeleteStorageObjectStorageStorageTypeDeletePathDeleteMutationResponse,
  DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams,
  DeleteStorageObjectStorageStorageTypeDeletePathDeleteQueryParams,
  DeleteStorageObjectStorageStorageTypeDeletePathDelete422,
} from '../../types/DeleteStorageObjectStorageStorageTypeDeletePathDelete.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Delete storage objects
 * @summary Delete Storage Object
 * {@link /storage/:storage_type/delete/:path}
 */
export async function deleteStorageObjectStorageStorageTypeDeletePathDelete(
  {
    storage_type,
    path,
  }: {
    storage_type: DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams['storage_type']
    path: DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams['path']
  },
  params?: DeleteStorageObjectStorageStorageTypeDeletePathDeleteQueryParams,
  config: Partial<RequestConfig> = {},
) {
  const res = await client<
    DeleteStorageObjectStorageStorageTypeDeletePathDeleteMutationResponse,
    DeleteStorageObjectStorageStorageTypeDeletePathDelete422,
    unknown
  >({ method: 'DELETE', url: `/storage/${storage_type}/delete/${path}`, params, ...config })
  return res
}