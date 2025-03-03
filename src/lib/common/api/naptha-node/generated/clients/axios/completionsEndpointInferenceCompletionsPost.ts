import client from "@kubb/plugin-client/clients/axios";
import type {
	CompletionsEndpointInferenceCompletionsPostMutationRequest,
	CompletionsEndpointInferenceCompletionsPostMutationResponse,
	CompletionsEndpointInferenceCompletionsPostQueryParams,
	CompletionsEndpointInferenceCompletionsPost422,
} from "../../types/CompletionsEndpointInferenceCompletionsPost.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";

export function getCompletionsEndpointInferenceCompletionsPostUrl() {
	return `/inference/completions` as const;
}

/**
 * @summary Completion
 * {@link /inference/completions}
 */
export async function completionsEndpointInferenceCompletionsPost(
	data: CompletionsEndpointInferenceCompletionsPostMutationRequest,
	params?: CompletionsEndpointInferenceCompletionsPostQueryParams,
	config: Partial<RequestConfig<CompletionsEndpointInferenceCompletionsPostMutationRequest>> = {},
) {
	const res = await client<
		CompletionsEndpointInferenceCompletionsPostMutationResponse,
		ResponseErrorConfig<CompletionsEndpointInferenceCompletionsPost422>,
		CompletionsEndpointInferenceCompletionsPostMutationRequest
	>({
		method: "POST",
		url: getCompletionsEndpointInferenceCompletionsPostUrl().toString(),
		params,
		data,
		...config,
	});

	return res;
}
