/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  CreateStorageObjectStorageStorageTypeCreatePathPostMutationRequest,
  CreateStorageObjectStorageStorageTypeCreatePathPostMutationResponse,
  CreateStorageObjectStorageStorageTypeCreatePathPostPathParams,
  CreateStorageObjectStorageStorageTypeCreatePathPost422,
} from '../../types/CreateStorageObjectStorageStorageTypeCreatePathPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getCreateStorageObjectStorageStorageTypeCreatePathPostUrl({
  storage_type,
  path,
}: {
  storage_type: CreateStorageObjectStorageStorageTypeCreatePathPostPathParams['storage_type']
  path: CreateStorageObjectStorageStorageTypeCreatePathPostPathParams['path']
}) {
  return `/storage/${storage_type}/create/${path}` as const
}

/**
 * @description Create new storage objects (table, file, or IPFS content)
 * @summary Create Storage Object
 * {@link /storage/:storage_type/create/:path}
 */
export async function createStorageObjectStorageStorageTypeCreatePathPost(
  {
    storage_type,
    path,
  }: {
    storage_type: CreateStorageObjectStorageStorageTypeCreatePathPostPathParams['storage_type']
    path: CreateStorageObjectStorageStorageTypeCreatePathPostPathParams['path']
  },
  data?: CreateStorageObjectStorageStorageTypeCreatePathPostMutationRequest,
  config: Partial<RequestConfig<CreateStorageObjectStorageStorageTypeCreatePathPostMutationRequest>> = {},
) {
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof typeof data]
      if (typeof key === 'string' && (typeof value === 'string' || value instanceof Blob)) {
        formData.append(key, value)
      }
    })
  }
  const res = await client<
    CreateStorageObjectStorageStorageTypeCreatePathPostMutationResponse,
    ResponseErrorConfig<CreateStorageObjectStorageStorageTypeCreatePathPost422>,
    CreateStorageObjectStorageStorageTypeCreatePathPostMutationRequest
  >({
    method: 'POST',
    url: getCreateStorageObjectStorageStorageTypeCreatePathPostUrl({ storage_type, path }).toString(),
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data', ...config.headers },
    ...config,
  })
  return res
}