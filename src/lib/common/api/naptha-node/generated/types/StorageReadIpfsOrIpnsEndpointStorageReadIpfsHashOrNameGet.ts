import type { HttpValidationError } from "./HttpValidationError.ts";

export type StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetPathParams = {
	/**
	 * @type string
	 */
	hash_or_name: string;
};

/**
 * @description Successful Response
 */
export type StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet200 = any;

/**
 * @description Validation Error
 */
export type StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet422 = HttpValidationError;

export type StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetQueryResponse =
	StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet200;

export type StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetQuery = {
	Response: StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet200;
	PathParams: StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGetPathParams;
	Errors: StorageReadIpfsOrIpnsEndpointStorageReadIpfsHashOrNameGet422;
};
