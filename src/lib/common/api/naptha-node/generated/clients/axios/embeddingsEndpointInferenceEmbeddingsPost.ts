import client from "@kubb/plugin-client/clients/axios";
import type {
	EmbeddingsEndpointInferenceEmbeddingsPostMutationRequest,
	EmbeddingsEndpointInferenceEmbeddingsPostMutationResponse,
	EmbeddingsEndpointInferenceEmbeddingsPostQueryParams,
	EmbeddingsEndpointInferenceEmbeddingsPost422,
} from "../../types/EmbeddingsEndpointInferenceEmbeddingsPost.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";

export function getEmbeddingsEndpointInferenceEmbeddingsPostUrl() {
	return `/inference/embeddings` as const;
}

/**
 * @summary Embeddings
 * {@link /inference/embeddings}
 */
export async function embeddingsEndpointInferenceEmbeddingsPost(
	data: EmbeddingsEndpointInferenceEmbeddingsPostMutationRequest,
	params?: EmbeddingsEndpointInferenceEmbeddingsPostQueryParams,
	config: Partial<RequestConfig<EmbeddingsEndpointInferenceEmbeddingsPostMutationRequest>> = {},
) {
	const res = await client<
		EmbeddingsEndpointInferenceEmbeddingsPostMutationResponse,
		ResponseErrorConfig<EmbeddingsEndpointInferenceEmbeddingsPost422>,
		EmbeddingsEndpointInferenceEmbeddingsPostMutationRequest
	>({
		method: "POST",
		url: getEmbeddingsEndpointInferenceEmbeddingsPostUrl().toString(),
		params,
		data,
		...config,
	});

	return res;
}
