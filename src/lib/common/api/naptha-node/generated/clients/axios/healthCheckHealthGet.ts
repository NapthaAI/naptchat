/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type { HealthCheckHealthGetQueryResponse } from '../../types/HealthCheckHealthGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getHealthCheckHealthGetUrl() {
  return `/health` as const
}

/**
 * @summary Health Check
 * {@link /health}
 */
export async function healthCheckHealthGet(config: Partial<RequestConfig> = {}) {
  const res = await client<HealthCheckHealthGetQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: getHealthCheckHealthGetUrl().toString(),
    ...config,
  })
  return res
}