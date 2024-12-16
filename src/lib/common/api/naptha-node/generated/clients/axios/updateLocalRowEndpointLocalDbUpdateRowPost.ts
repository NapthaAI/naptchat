import client from "@kubb/plugin-client/clients/axios";
import type {
	UpdateLocalRowEndpointLocalDbUpdateRowPostMutationRequest,
	UpdateLocalRowEndpointLocalDbUpdateRowPostMutationResponse,
	UpdateLocalRowEndpointLocalDbUpdateRowPost422,
} from "../../types/UpdateLocalRowEndpointLocalDbUpdateRowPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Update rows in a table in the local database
 * @summary Update Local Row Endpoint
 * {@link /local-db/update-row}
 */
export async function updateLocalRowEndpointLocalDbUpdateRowPost(
	data: UpdateLocalRowEndpointLocalDbUpdateRowPostMutationRequest,
	config: Partial<RequestConfig<UpdateLocalRowEndpointLocalDbUpdateRowPostMutationRequest>> = {},
) {
	const res = await client<
		UpdateLocalRowEndpointLocalDbUpdateRowPostMutationResponse,
		UpdateLocalRowEndpointLocalDbUpdateRowPost422,
		UpdateLocalRowEndpointLocalDbUpdateRowPostMutationRequest
	>({ method: "POST", url: `/local-db/update-row`, data, ...config });

	return res;
}
