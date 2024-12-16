import type { BodyAddLocalRowEndpointLocalDbAddRowPost } from "./BodyAddLocalRowEndpointLocalDbAddRowPost.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type AddLocalRowEndpointLocalDbAddRowPost200 = object;

/**
 * @description Validation Error
 */
export type AddLocalRowEndpointLocalDbAddRowPost422 = HttpValidationError;

export type AddLocalRowEndpointLocalDbAddRowPostMutationRequest =
	BodyAddLocalRowEndpointLocalDbAddRowPost;

export type AddLocalRowEndpointLocalDbAddRowPostMutationResponse =
	AddLocalRowEndpointLocalDbAddRowPost200;

export type AddLocalRowEndpointLocalDbAddRowPostMutation = {
	Response: AddLocalRowEndpointLocalDbAddRowPost200;
	Request: AddLocalRowEndpointLocalDbAddRowPostMutationRequest;
	Errors: AddLocalRowEndpointLocalDbAddRowPost422;
};
