import type { ChatMessage } from './ChatMessage.ts'

export type ChatCompletionRequest = {
  /**
   * @type string
   */
  model: string
  /**
   * @type array
   */
  messages: ChatMessage[]
  temperature?: number | null
  max_tokens?: number | null
  top_p?: number | null
  frequency_penalty?: number | null
  presence_penalty?: number | null
  stop?: string[] | null
  stream?: boolean | null
  stream_options?: object | null
  n?: number | null
  response_format?: object | null
  seed?: number | null
  tools?: any[] | null
  tool_choice?: string | null
  parallel_tool_calls?: boolean | null
}