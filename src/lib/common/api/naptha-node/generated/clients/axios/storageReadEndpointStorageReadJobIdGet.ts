import client from "@kubb/plugin-client/clients/axios";
import type {
	StorageReadEndpointStorageReadJobIdGetQueryResponse,
	StorageReadEndpointStorageReadJobIdGetPathParams,
	StorageReadEndpointStorageReadJobIdGet422,
} from "../../types/StorageReadEndpointStorageReadJobIdGet.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Get the output directory for a job_id and serve it as a tar.gz file.
 * @summary Storage Read Endpoint
 * {@link /storage/read/:job_id}
 */
export async function storageReadEndpointStorageReadJobIdGet(
	{ job_id }: { job_id: StorageReadEndpointStorageReadJobIdGetPathParams["job_id"] },
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		StorageReadEndpointStorageReadJobIdGetQueryResponse,
		StorageReadEndpointStorageReadJobIdGet422,
		unknown
	>({
		method: "GET",
		url: `/storage/read/${job_id}`,
		...config,
	});

	return res;
}
