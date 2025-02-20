/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest,
  SearchStorageObjectsStorageStorageTypeSearchPostMutationResponse,
  SearchStorageObjectsStorageStorageTypeSearchPostPathParams,
  SearchStorageObjectsStorageStorageTypeSearchPostQueryParams,
  SearchStorageObjectsStorageStorageTypeSearchPost422,
} from '../../types/SearchStorageObjectsStorageStorageTypeSearchPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getSearchStorageObjectsStorageStorageTypeSearchPostUrl({
  storage_type,
}: {
  storage_type: SearchStorageObjectsStorageStorageTypeSearchPostPathParams['storage_type']
}) {
  return `/storage/${storage_type}/search` as const
}

/**
 * @description Search across storage (DB query, file content search, IPFS search)
 * @summary Search Storage Objects
 * {@link /storage/:storage_type/search}
 */
export async function searchStorageObjectsStorageStorageTypeSearchPost(
  { storage_type }: { storage_type: SearchStorageObjectsStorageStorageTypeSearchPostPathParams['storage_type'] },
  data: SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest,
  params?: SearchStorageObjectsStorageStorageTypeSearchPostQueryParams,
  config: Partial<RequestConfig<SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest>> = {},
) {
  const res = await client<
    SearchStorageObjectsStorageStorageTypeSearchPostMutationResponse,
    ResponseErrorConfig<SearchStorageObjectsStorageStorageTypeSearchPost422>,
    SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest
  >({ method: 'POST', url: getSearchStorageObjectsStorageStorageTypeSearchPostUrl({ storage_type }).toString(), params, data, ...config })
  return res
}