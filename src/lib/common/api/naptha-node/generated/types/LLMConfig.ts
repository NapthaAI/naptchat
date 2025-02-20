import type { LLMClientType } from './LLMClientType.ts'

export type LLMConfig = {
  config_name?: string | null
  client?: LLMClientType | null
  model?: string | null
  max_tokens?: number | null
  temperature?: number | null
  api_base?: string | null
  options?: object | null
}