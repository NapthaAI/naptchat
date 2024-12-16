import type { ChatCompletionRequest } from "./ChatCompletionRequest.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type ChatEndpointInferenceChatPost200 = any;

/**
 * @description Validation Error
 */
export type ChatEndpointInferenceChatPost422 = HttpValidationError;

export type ChatEndpointInferenceChatPostMutationRequest = ChatCompletionRequest;

export type ChatEndpointInferenceChatPostMutationResponse = ChatEndpointInferenceChatPost200;

export type ChatEndpointInferenceChatPostMutation = {
	Response: ChatEndpointInferenceChatPost200;
	Request: ChatEndpointInferenceChatPostMutationRequest;
	Errors: ChatEndpointInferenceChatPost422;
};
