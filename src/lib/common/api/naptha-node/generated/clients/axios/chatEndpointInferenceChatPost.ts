/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type {
  ChatEndpointInferenceChatPostMutationRequest,
  ChatEndpointInferenceChatPostMutationResponse,
  ChatEndpointInferenceChatPost422,
} from '../../types/ChatEndpointInferenceChatPost.ts'
import type { RequestConfig } from '@kubb/plugin-client/clients/axios'

/**
 * @description Forward chat completion requests to litellm proxy
 * @summary Chat Endpoint
 * {@link /inference/chat}
 */
export async function chatEndpointInferenceChatPost(
  data: ChatEndpointInferenceChatPostMutationRequest,
  config: Partial<RequestConfig<ChatEndpointInferenceChatPostMutationRequest>> = {},
) {
  const res = await client<ChatEndpointInferenceChatPostMutationResponse, ChatEndpointInferenceChatPost422, ChatEndpointInferenceChatPostMutationRequest>({
    method: 'POST',
    url: `/inference/chat`,
    data,
    ...config,
  })
  return res
}