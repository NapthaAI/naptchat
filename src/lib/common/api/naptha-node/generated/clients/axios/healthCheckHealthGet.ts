import client from "@kubb/plugin-client/clients/axios";
import type { HealthCheckHealthGetQueryResponse } from "../../types/HealthCheckHealthGet.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @summary Health Check
 * {@link /health}
 */
export async function healthCheckHealthGet(config: Partial<RequestConfig> = {}) {
	const res = await client<HealthCheckHealthGetQueryResponse, Error, unknown>({
		method: "GET",
		url: `/health`,
		...config,
	});

	return res;
}
