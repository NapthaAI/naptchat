import type { BodyStorageWriteIpfsEndpointStorageWriteIpfsPost } from "./BodyStorageWriteIpfsEndpointStorageWriteIpfsPost.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type StorageWriteIpfsEndpointStorageWriteIpfsPost200 = any;

/**
 * @description Validation Error
 */
export type StorageWriteIpfsEndpointStorageWriteIpfsPost422 = HttpValidationError;

export type StorageWriteIpfsEndpointStorageWriteIpfsPostMutationRequest =
	BodyStorageWriteIpfsEndpointStorageWriteIpfsPost;

export type StorageWriteIpfsEndpointStorageWriteIpfsPostMutationResponse =
	StorageWriteIpfsEndpointStorageWriteIpfsPost200;

export type StorageWriteIpfsEndpointStorageWriteIpfsPostMutation = {
	Response: StorageWriteIpfsEndpointStorageWriteIpfsPost200;
	Request: StorageWriteIpfsEndpointStorageWriteIpfsPostMutationRequest;
	Errors: StorageWriteIpfsEndpointStorageWriteIpfsPost422;
};
