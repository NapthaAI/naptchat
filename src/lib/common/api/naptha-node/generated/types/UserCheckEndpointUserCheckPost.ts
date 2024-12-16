import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type UserCheckEndpointUserCheckPost200 = any;

/**
 * @description Validation Error
 */
export type UserCheckEndpointUserCheckPost422 = HttpValidationError;

export type UserCheckEndpointUserCheckPostMutationRequest = object;

export type UserCheckEndpointUserCheckPostMutationResponse = UserCheckEndpointUserCheckPost200;

export type UserCheckEndpointUserCheckPostMutation = {
	Response: UserCheckEndpointUserCheckPost200;
	Request: UserCheckEndpointUserCheckPostMutationRequest;
	Errors: UserCheckEndpointUserCheckPost422;
};
