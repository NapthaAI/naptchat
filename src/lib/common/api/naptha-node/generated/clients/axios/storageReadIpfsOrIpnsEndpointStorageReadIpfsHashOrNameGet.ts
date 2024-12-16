import client from "@kubb/plugin-client/clients/axios";
import type {
	StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetQueryResponse,
	StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetPathParams,
	StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet422,
} from "../../types/StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Read a file from IPFS or IPNS.
 * @summary Storage Read Ipfs Or Ipns Endpoint
 * {@link /storage/read_ipfs/:hash_or_name}
 */
export async function storageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet(
	{
		hash_or_name,
	}: {
		hash_or_name: StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetPathParams["hash_or_name"];
	},
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetQueryResponse,
		StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet422,
		unknown
	>({ method: "GET", url: `/storage/read_ipfs/${hash_or_name}`, ...config });

	return res;
}
