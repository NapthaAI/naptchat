/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ReadStorageObjectStorageStorageTypeReadPathGetQueryResponse,
  ReadStorageObjectStorageStorageTypeReadPathGetPathParams,
  ReadStorageObjectStorageStorageTypeReadPathGetQueryParams,
  ReadStorageObjectStorageStorageTypeReadPathGet422,
} from '../../types/ReadStorageObjectStorageStorageTypeReadPathGet.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Read from storage (query DB, read file, or fetch IPFS content)
 * @summary Read Storage Object
 * {@link /storage/:storage_type/read/:path}
 */
export async function readStorageObjectStorageStorageTypeReadPathGet(
  {
    storage_type,
    path,
  }: {
    storage_type: ReadStorageObjectStorageStorageTypeReadPathGetPathParams['storage_type']
    path: ReadStorageObjectStorageStorageTypeReadPathGetPathParams['path']
  },
  params?: ReadStorageObjectStorageStorageTypeReadPathGetQueryParams,
  config: Partial<RequestConfig> = {},
) {
  const res = await client<ReadStorageObjectStorageStorageTypeReadPathGetQueryResponse, ReadStorageObjectStorageStorageTypeReadPathGet422, unknown>({
    method: 'GET',
    url: `/storage/${storage_type}/read/${path}`,
    params,
    ...config,
  })
  return res
}