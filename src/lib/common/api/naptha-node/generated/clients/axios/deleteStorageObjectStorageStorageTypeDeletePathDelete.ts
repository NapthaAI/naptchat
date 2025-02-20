/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  DeleteStorageObjectStorageStorageTypeDeletePathDeleteMutationResponse,
  DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams,
  DeleteStorageObjectStorageStorageTypeDeletePathDeleteQueryParams,
  DeleteStorageObjectStorageStorageTypeDeletePathDelete422,
} from '../../types/DeleteStorageObjectStorageStorageTypeDeletePathDelete.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getDeleteStorageObjectStorageStorageTypeDeletePathDeleteUrl({
  storage_type,
  path,
}: {
  storage_type: DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams['storage_type']
  path: DeleteStorageObjectStorageStorageTypeDeletePathDeletePathParams['path']
}) {
  return `/storage/${storage_type}/delete/${path}` as const
}

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
    ResponseErrorConfig<DeleteStorageObjectStorageStorageTypeDeletePathDelete422>,
    unknown
  >({ method: 'DELETE', url: getDeleteStorageObjectStorageStorageTypeDeletePathDeleteUrl({ storage_type, path }).toString(), params, ...config })
  return res
}