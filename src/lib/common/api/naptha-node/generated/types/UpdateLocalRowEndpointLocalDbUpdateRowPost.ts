import type { BodyUpdateLocalRowEndpointLocalDbUpdateRowPost } from "./BodyUpdateLocalRowEndpointLocalDbUpdateRowPost.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type UpdateLocalRowEndpointLocalDbUpdateRowPost200 = object;

/**
 * @description Validation Error
 */
export type UpdateLocalRowEndpointLocalDbUpdateRowPost422 = HttpValidationError;

export type UpdateLocalRowEndpointLocalDbUpdateRowPostMutationRequest =
	BodyUpdateLocalRowEndpointLocalDbUpdateRowPost;

export type UpdateLocalRowEndpointLocalDbUpdateRowPostMutationResponse =
	UpdateLocalRowEndpointLocalDbUpdateRowPost200;

export type UpdateLocalRowEndpointLocalDbUpdateRowPostMutation = {
	Response: UpdateLocalRowEndpointLocalDbUpdateRowPost200;
	Request: UpdateLocalRowEndpointLocalDbUpdateRowPostMutationRequest;
	Errors: UpdateLocalRowEndpointLocalDbUpdateRowPost422;
};
