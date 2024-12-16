import client from "@kubb/plugin-client/clients/axios";
import type {
	CreateLocalTableEndpointLocalDbCreateTablePostMutationRequest,
	CreateLocalTableEndpointLocalDbCreateTablePostMutationResponse,
	CreateLocalTableEndpointLocalDbCreateTablePost422,
} from "../../types/CreateLocalTableEndpointLocalDbCreateTablePost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Create a table in the local database
 * @summary Create Local Table Endpoint
 * {@link /local-db/create-table}
 */
export async function createLocalTableEndpointLocalDbCreateTablePost(
	data: CreateLocalTableEndpointLocalDbCreateTablePostMutationRequest,
	config: Partial<
		RequestConfig<CreateLocalTableEndpointLocalDbCreateTablePostMutationRequest>
	> = {},
) {
	const res = await client<
		CreateLocalTableEndpointLocalDbCreateTablePostMutationResponse,
		CreateLocalTableEndpointLocalDbCreateTablePost422,
		CreateLocalTableEndpointLocalDbCreateTablePostMutationRequest
	>({ method: "POST", url: `/local-db/create-table`, data, ...config });

	return res;
}
