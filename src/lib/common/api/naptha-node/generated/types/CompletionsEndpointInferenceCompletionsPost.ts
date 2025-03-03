import type { CompletionRequest } from "./CompletionRequest.ts";
import type { HTTPValidationError } from "./HTTPValidationError.ts";

export type CompletionsEndpointInferenceCompletionsPostQueryParams = {
	/**
	 * @description Model
	 * @type string | undefined
	 */
	model?: string;
};

/**
 * @description Successful Response
 */
export type CompletionsEndpointInferenceCompletionsPost200 = any;

/**
 * @description Validation Error
 */
export type CompletionsEndpointInferenceCompletionsPost422 = HTTPValidationError;

export type CompletionsEndpointInferenceCompletionsPostMutationRequest = CompletionRequest;

export type CompletionsEndpointInferenceCompletionsPostMutationResponse =
	CompletionsEndpointInferenceCompletionsPost200;

export type CompletionsEndpointInferenceCompletionsPostMutation = {
	Response: CompletionsEndpointInferenceCompletionsPost200;
	Request: CompletionsEndpointInferenceCompletionsPostMutationRequest;
	QueryParams: CompletionsEndpointInferenceCompletionsPostQueryParams;
	Errors: CompletionsEndpointInferenceCompletionsPost422;
};
