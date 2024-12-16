import client from "@kubb/plugin-client/clients/axios";
import type {
	QueryTableRowsEndpointLocalDbTableTableNameRowsGetQueryResponse,
	QueryTableRowsEndpointLocalDbTableTableNameRowsGetPathParams,
	QueryTableRowsEndpointLocalDbTableTableNameRowsGetQueryParams,
	QueryTableRowsEndpointLocalDbTableTableNameRowsGet422,
} from "../../types/QueryTableRowsEndpointLocalDbTableTableNameRowsGet.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Query rows from a table with optional filters
 * @summary Query Table Rows Endpoint
 * {@link /local-db/table/:table_name/rows}
 */
export async function queryTableRowsEndpointLocalDbTableTableNameRowsGet(
	{
		table_name,
	}: { table_name: QueryTableRowsEndpointLocalDbTableTableNameRowsGetPathParams["table_name"] },
	params?: QueryTableRowsEndpointLocalDbTableTableNameRowsGetQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		QueryTableRowsEndpointLocalDbTableTableNameRowsGetQueryResponse,
		QueryTableRowsEndpointLocalDbTableTableNameRowsGet422,
		unknown
	>({
		method: "GET",
		url: `/local-db/table/${table_name}/rows`,
		params,
		...config,
	});

	return res;
}
