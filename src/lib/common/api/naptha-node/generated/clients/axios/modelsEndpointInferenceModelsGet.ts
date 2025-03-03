/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ModelsEndpointInferenceModelsGetQueryResponse,
  ModelsEndpointInferenceModelsGetQueryParams,
  ModelsEndpointInferenceModelsGet422,
} from '../../types/ModelsEndpointInferenceModelsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getModelsEndpointInferenceModelsGetUrl() {
  return `/inference/models` as const
}

/**
 * @summary List Models
 * {@link /inference/models}
 */
export async function modelsEndpointInferenceModelsGet(params?: ModelsEndpointInferenceModelsGetQueryParams, config: Partial<RequestConfig> = {}) {
  const res = await client<ModelsEndpointInferenceModelsGetQueryResponse, ResponseErrorConfig<ModelsEndpointInferenceModelsGet422>, unknown>({
    method: 'GET',
    url: getModelsEndpointInferenceModelsGetUrl().toString(),
    params,
    ...config,
  })
  return res
}