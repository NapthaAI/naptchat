import type { BodyStorageWriteEndpointStorageWritePost } from "./BodyStorageWriteEndpointStorageWritePost.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type StorageWriteEndpointStorageWritePost200 = any;

/**
 * @description Validation Error
 */
export type StorageWriteEndpointStorageWritePost422 = HttpValidationError;

export type StorageWriteEndpointStorageWritePostMutationRequest =
	BodyStorageWriteEndpointStorageWritePost;

export type StorageWriteEndpointStorageWritePostMutationResponse =
	StorageWriteEndpointStorageWritePost200;

export type StorageWriteEndpointStorageWritePostMutation = {
	Response: StorageWriteEndpointStorageWritePost200;
	Request: StorageWriteEndpointStorageWritePostMutationRequest;
	Errors: StorageWriteEndpointStorageWritePost422;
};
