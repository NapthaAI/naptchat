/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ChatEndpointInferenceChatPostMutationRequest,
  ChatEndpointInferenceChatPostMutationResponse,
  ChatEndpointInferenceChatPost422,
} from '../../types/ChatEndpointInferenceChatPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getChatEndpointInferenceChatPostUrl() {
  return `/inference/chat` as const
}

/**
 * @description Forward chat completion requests to litellm proxy
 * @summary Chat Endpoint
 * {@link /inference/chat}
 */
export async function chatEndpointInferenceChatPost(
  data: ChatEndpointInferenceChatPostMutationRequest,
  config: Partial<RequestConfig<ChatEndpointInferenceChatPostMutationRequest>> = {},
) {
  const res = await client<
    ChatEndpointInferenceChatPostMutationResponse,
    ResponseErrorConfig<ChatEndpointInferenceChatPost422>,
    ChatEndpointInferenceChatPostMutationRequest
  >({ method: 'POST', url: getChatEndpointInferenceChatPostUrl().toString(), data, ...config })
  return res
}