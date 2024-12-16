import type { HttpValidationError } from "./HttpValidationError.ts";

export type StorageReadEndpointStorageReadJobIdGetPathParams = {
	/**
	 * @type string
	 */
	job_id: string;
};

/**
 * @description Successful Response
 */
export type StorageReadEndpointStorageReadJobIdGet200 = any;

/**
 * @description Validation Error
 */
export type StorageReadEndpointStorageReadJobIdGet422 = HttpValidationError;

export type StorageReadEndpointStorageReadJobIdGetQueryResponse =
	StorageReadEndpointStorageReadJobIdGet200;

export type StorageReadEndpointStorageReadJobIdGetQuery = {
	Response: StorageReadEndpointStorageReadJobIdGet200;
	PathParams: StorageReadEndpointStorageReadJobIdGetPathParams;
	Errors: StorageReadEndpointStorageReadJobIdGet422;
};
