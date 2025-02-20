import type { LLMConfig } from './LLMConfig.ts'

export type ToolConfigInput = {
  config_name?: string | null
  config_schema?: string | null
  llm_config?: LLMConfig | null
}