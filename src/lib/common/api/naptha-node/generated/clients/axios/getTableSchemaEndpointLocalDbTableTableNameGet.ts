import client from "@kubb/plugin-client/clients/axios";
import type {
	GetTableSchemaEndpointLocalDbTableTableNameGetQueryResponse,
	GetTableSchemaEndpointLocalDbTableTableNameGetPathParams,
	GetTableSchemaEndpointLocalDbTableTableNameGet422,
} from "../../types/GetTableSchemaEndpointLocalDbTableTableNameGet.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Get schema information for a specific table
 * @summary Get Table Schema Endpoint
 * {@link /local-db/table/:table_name}
 */
export async function getTableSchemaEndpointLocalDbTableTableNameGet(
	{
		table_name,
	}: { table_name: GetTableSchemaEndpointLocalDbTableTableNameGetPathParams["table_name"] },
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		GetTableSchemaEndpointLocalDbTableTableNameGetQueryResponse,
		GetTableSchemaEndpointLocalDbTableTableNameGet422,
		unknown
	>({
		method: "GET",
		url: `/local-db/table/${table_name}`,
		...config,
	});

	return res;
}
