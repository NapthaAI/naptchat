import client from "@kubb/plugin-client/clients/axios";
import type {
	AddLocalRowEndpointLocalDbAddRowPostMutationRequest,
	AddLocalRowEndpointLocalDbAddRowPostMutationResponse,
	AddLocalRowEndpointLocalDbAddRowPost422,
} from "../../types/AddLocalRowEndpointLocalDbAddRowPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Add a row to a table in the local database
 * @summary Add Local Row Endpoint
 * {@link /local-db/add-row}
 */
export async function addLocalRowEndpointLocalDbAddRowPost(
	data: AddLocalRowEndpointLocalDbAddRowPostMutationRequest,
	config: Partial<RequestConfig<AddLocalRowEndpointLocalDbAddRowPostMutationRequest>> = {},
) {
	const res = await client<
		AddLocalRowEndpointLocalDbAddRowPostMutationResponse,
		AddLocalRowEndpointLocalDbAddRowPost422,
		AddLocalRowEndpointLocalDbAddRowPostMutationRequest
	>({ method: "POST", url: `/local-db/add-row`, data, ...config });

	return res;
}
