import client from "@kubb/plugin-client/clients/axios";
import type { ListTablesEndpointLocalDbTablesGetQueryResponse } from "../../types/ListTablesEndpointLocalDbTablesGet.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Get list of all tables in the local database
 * @summary List Tables Endpoint
 * {@link /local-db/tables}
 */
export async function listTablesEndpointLocalDbTablesGet(config: Partial<RequestConfig> = {}) {
	const res = await client<ListTablesEndpointLocalDbTablesGetQueryResponse, Error, unknown>({
		method: "GET",
		url: `/local-db/tables`,
		...config,
	});

	return res;
}
