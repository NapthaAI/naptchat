import client from "@kubb/plugin-client/clients/axios";
import type {
	StorageWriteIpfsEndpointStorageWriteIpfsPostMutationRequest,
	StorageWriteIpfsEndpointStorageWriteIpfsPostMutationResponse,
	StorageWriteIpfsEndpointStorageWriteIpfsPost422,
} from "../../types/StorageWriteIpfsEndpointStorageWriteIpfsPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Write a file to IPFS, optionally publish to IPNS or update an existing IPNS record.
 * @summary Storage Write Ipfs Endpoint
 * {@link /storage/write_ipfs}
 */
export async function storageWriteIpfsEndpointStorageWriteIpfsPost(
	data: StorageWriteIpfsEndpointStorageWriteIpfsPostMutationRequest,
	config: Partial<RequestConfig<StorageWriteIpfsEndpointStorageWriteIpfsPostMutationRequest>> = {},
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
		StorageWriteIpfsEndpointStorageWriteIpfsPostMutationResponse,
		StorageWriteIpfsEndpointStorageWriteIpfsPost422,
		StorageWriteIpfsEndpointStorageWriteIpfsPostMutationRequest
	>({
		method: "POST",
		url: `/storage/write_ipfs`,
		data: formData,
		headers: { "Content-Type": "multipart/form-data", ...config.headers },
		...config,
	});

	return res;
}
