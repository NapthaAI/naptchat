import client from "@kubb/plugin-client/clients/axios";
import type {
	DeleteLocalRowEndpointLocalDbDeleteRowPostMutationRequest,
	DeleteLocalRowEndpointLocalDbDeleteRowPostMutationResponse,
	DeleteLocalRowEndpointLocalDbDeleteRowPost422,
} from "../../types/DeleteLocalRowEndpointLocalDbDeleteRowPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Delete rows from a table in the local database
 * @summary Delete Local Row Endpoint
 * {@link /local-db/delete-row}
 */
export async function deleteLocalRowEndpointLocalDbDeleteRowPost(
	data: DeleteLocalRowEndpointLocalDbDeleteRowPostMutationRequest,
	config: Partial<RequestConfig<DeleteLocalRowEndpointLocalDbDeleteRowPostMutationRequest>> = {},
) {
	const res = await client<
		DeleteLocalRowEndpointLocalDbDeleteRowPostMutationResponse,
		DeleteLocalRowEndpointLocalDbDeleteRowPost422,
		DeleteLocalRowEndpointLocalDbDeleteRowPostMutationRequest
	>({ method: "POST", url: `/local-db/delete-row`, data, ...config });

	return res;
}
