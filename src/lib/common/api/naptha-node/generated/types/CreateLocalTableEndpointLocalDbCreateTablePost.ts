import type { BodyCreateLocalTableEndpointLocalDbCreateTablePost } from "./BodyCreateLocalTableEndpointLocalDbCreateTablePost.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type CreateLocalTableEndpointLocalDbCreateTablePost200 = object;

/**
 * @description Validation Error
 */
export type CreateLocalTableEndpointLocalDbCreateTablePost422 = HttpValidationError;

export type CreateLocalTableEndpointLocalDbCreateTablePostMutationRequest =
	BodyCreateLocalTableEndpointLocalDbCreateTablePost;

export type CreateLocalTableEndpointLocalDbCreateTablePostMutationResponse =
	CreateLocalTableEndpointLocalDbCreateTablePost200;

export type CreateLocalTableEndpointLocalDbCreateTablePostMutation = {
	Response: CreateLocalTableEndpointLocalDbCreateTablePost200;
	Request: CreateLocalTableEndpointLocalDbCreateTablePostMutationRequest;
	Errors: CreateLocalTableEndpointLocalDbCreateTablePost422;
};
