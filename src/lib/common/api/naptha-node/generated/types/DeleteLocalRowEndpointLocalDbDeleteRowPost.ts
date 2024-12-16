import type { BodyDeleteLocalRowEndpointLocalDbDeleteRowPost } from "./BodyDeleteLocalRowEndpointLocalDbDeleteRowPost.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type DeleteLocalRowEndpointLocalDbDeleteRowPost200 = object;

/**
 * @description Validation Error
 */
export type DeleteLocalRowEndpointLocalDbDeleteRowPost422 = HttpValidationError;

export type DeleteLocalRowEndpointLocalDbDeleteRowPostMutationRequest =
	BodyDeleteLocalRowEndpointLocalDbDeleteRowPost;

export type DeleteLocalRowEndpointLocalDbDeleteRowPostMutationResponse =
	DeleteLocalRowEndpointLocalDbDeleteRowPost200;

export type DeleteLocalRowEndpointLocalDbDeleteRowPostMutation = {
	Response: DeleteLocalRowEndpointLocalDbDeleteRowPost200;
	Request: DeleteLocalRowEndpointLocalDbDeleteRowPostMutationRequest;
	Errors: DeleteLocalRowEndpointLocalDbDeleteRowPost422;
};
