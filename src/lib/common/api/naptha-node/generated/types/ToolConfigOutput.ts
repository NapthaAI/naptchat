import type { LlmConfig } from './LlmConfig.ts'

export type ToolConfigOutput = {
  config_name?: string | null
  config_schema?: string | null
  llm_config?: LlmConfig | null
}