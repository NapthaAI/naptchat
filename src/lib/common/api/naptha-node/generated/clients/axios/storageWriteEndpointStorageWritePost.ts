import client from "@kubb/plugin-client/clients/axios";
import type {
	StorageWriteEndpointStorageWritePostMutationRequest,
	StorageWriteEndpointStorageWritePostMutationResponse,
	StorageWriteEndpointStorageWritePost422,
} from "../../types/StorageWriteEndpointStorageWritePost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Write files to the storage.
 * @summary Storage Write Endpoint
 * {@link /storage/write}
 */
export async function storageWriteEndpointStorageWritePost(
	data: StorageWriteEndpointStorageWritePostMutationRequest,
	config: Partial<RequestConfig<StorageWriteEndpointStorageWritePostMutationRequest>> = {},
) {
	const formData = new FormData();

	if (data) {
		Object.keys(data).forEach((key) => {
			const value = data[key as keyof typeof data];

			if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
				formData.append(key, value);
			}
		});
	}

	const res = await client<
		StorageWriteEndpointStorageWritePostMutationResponse,
		StorageWriteEndpointStorageWritePost422,
		StorageWriteEndpointStorageWritePostMutationRequest
	>({
		method: "POST",
		url: `/storage/write`,
		data: formData,
		headers: { "Content-Type": "multipart/form-data", ...config.headers },
		...config,
	});

	return res;
}
