/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ChatCompletionsEndpointInferenceChatCompletionsPostMutationRequest,
  ChatCompletionsEndpointInferenceChatCompletionsPostMutationResponse,
  ChatCompletionsEndpointInferenceChatCompletionsPostQueryParams,
  ChatCompletionsEndpointInferenceChatCompletionsPost422,
} from '../../types/ChatCompletionsEndpointInferenceChatCompletionsPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getChatCompletionsEndpointInferenceChatCompletionsPostUrl() {
  return `/inference/chat/completions` as const
}

/**
 * @summary Chat Completion
 * {@link /inference/chat/completions}
 */
export async function chatCompletionsEndpointInferenceChatCompletionsPost(
  data: ChatCompletionsEndpointInferenceChatCompletionsPostMutationRequest,
  params?: ChatCompletionsEndpointInferenceChatCompletionsPostQueryParams,
  config: Partial<RequestConfig<ChatCompletionsEndpointInferenceChatCompletionsPostMutationRequest>> = {},
) {
  const res = await client<
    ChatCompletionsEndpointInferenceChatCompletionsPostMutationResponse,
    ResponseErrorConfig<ChatCompletionsEndpointInferenceChatCompletionsPost422>,
    ChatCompletionsEndpointInferenceChatCompletionsPostMutationRequest
  >({ method: 'POST', url: getChatCompletionsEndpointInferenceChatCompletionsPostUrl().toString(), params, data, ...config })
  return res
}