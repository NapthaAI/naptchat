/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationRequest,
  UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationResponse,
  UpdateStorageObjectStorageStorageTypeUpdatePathPutPathParams,
  UpdateStorageObjectStorageStorageTypeUpdatePathPutQueryParams,
  UpdateStorageObjectStorageStorageTypeUpdatePathPut422,
} from '../../types/UpdateStorageObjectStorageStorageTypeUpdatePathPut.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Update storage objects (currently only supports database)
 * @summary Update Storage Object
 * {@link /storage/:storage_type/update/:path}
 */
export async function updateStorageObjectStorageStorageTypeUpdatePathPut(
  {
    storage_type,
    path,
  }: {
    storage_type: UpdateStorageObjectStorageStorageTypeUpdatePathPutPathParams['storage_type']
    path: UpdateStorageObjectStorageStorageTypeUpdatePathPutPathParams['path']
  },
  data?: UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationRequest,
  params?: UpdateStorageObjectStorageStorageTypeUpdatePathPutQueryParams,
  config: Partial<RequestConfig<UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationRequest>> = {},
) {
  const res = await client<
    UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationResponse,
    UpdateStorageObjectStorageStorageTypeUpdatePathPut422,
    UpdateStorageObjectStorageStorageTypeUpdatePathPutMutationRequest
  >({
    method: 'PUT',
    url: `/storage/${storage_type}/update/${path}`,
    params,
    data,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...config.headers },
    ...config,
  })
  return res
}