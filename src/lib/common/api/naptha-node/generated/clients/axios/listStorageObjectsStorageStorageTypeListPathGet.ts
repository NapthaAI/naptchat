/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ListStorageObjectsStorageStorageTypeListPathGetQueryResponse,
  ListStorageObjectsStorageStorageTypeListPathGetPathParams,
  ListStorageObjectsStorageStorageTypeListPathGetQueryParams,
  ListStorageObjectsStorageStorageTypeListPathGet422,
} from '../../types/ListStorageObjectsStorageStorageTypeListPathGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getListStorageObjectsStorageStorageTypeListPathGetUrl({
  storage_type,
  path,
}: {
  storage_type: ListStorageObjectsStorageStorageTypeListPathGetPathParams['storage_type']
  path: ListStorageObjectsStorageStorageTypeListPathGetPathParams['path']
}) {
  return `/storage/${storage_type}/list/${path}` as const
}

/**
 * @description List storage objects (DB tables/rows, directory contents, IPFS directory)
 * @summary List Storage Objects
 * {@link /storage/:storage_type/list/:path}
 */
export async function listStorageObjectsStorageStorageTypeListPathGet(
  {
    storage_type,
    path,
  }: {
    storage_type: ListStorageObjectsStorageStorageTypeListPathGetPathParams['storage_type']
    path: ListStorageObjectsStorageStorageTypeListPathGetPathParams['path']
  },
  params?: ListStorageObjectsStorageStorageTypeListPathGetQueryParams,
  config: Partial<RequestConfig> = {},
) {
  const res = await client<
    ListStorageObjectsStorageStorageTypeListPathGetQueryResponse,
    ResponseErrorConfig<ListStorageObjectsStorageStorageTypeListPathGet422>,
    unknown
  >({ method: 'GET', url: getListStorageObjectsStorageStorageTypeListPathGetUrl({ storage_type, path }).toString(), params, ...config })
  return res
}