import type { ChatCompletionRequest } from "./ChatCompletionRequest.ts";
import type { HTTPValidationError } from "./HTTPValidationError.ts";

export type ChatCompletionsEndpointInferenceChatCompletionsPostQueryParams = {
	/**
	 * @description Model
	 * @type string | undefined
	 */
	model?: string;
};

/**
 * @description Successful Response
 */
export type ChatCompletionsEndpointInferenceChatCompletionsPost200 = any;

/**
 * @description Validation Error
 */
export type ChatCompletionsEndpointInferenceChatCompletionsPost422 = HTTPValidationError;

export type ChatCompletionsEndpointInferenceChatCompletionsPostMutationRequest =
	ChatCompletionRequest;

export type ChatCompletionsEndpointInferenceChatCompletionsPostMutationResponse =
	ChatCompletionsEndpointInferenceChatCompletionsPost200;

export type ChatCompletionsEndpointInferenceChatCompletionsPostMutation = {
	Response: ChatCompletionsEndpointInferenceChatCompletionsPost200;
	Request: ChatCompletionsEndpointInferenceChatCompletionsPostMutationRequest;
	QueryParams: ChatCompletionsEndpointInferenceChatCompletionsPostQueryParams;
	Errors: ChatCompletionsEndpointInferenceChatCompletionsPost422;
};
