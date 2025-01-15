/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest,
  SearchStorageObjectsStorageStorageTypeSearchPostMutationResponse,
  SearchStorageObjectsStorageStorageTypeSearchPostPathParams,
  SearchStorageObjectsStorageStorageTypeSearchPostQueryParams,
  SearchStorageObjectsStorageStorageTypeSearchPost422,
} from '../../types/SearchStorageObjectsStorageStorageTypeSearchPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

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
    SearchStorageObjectsStorageStorageTypeSearchPost422,
    SearchStorageObjectsStorageStorageTypeSearchPostMutationRequest
  >({ method: 'POST', url: `/storage/${storage_type}/search`, params, data, ...config })
  return res
}