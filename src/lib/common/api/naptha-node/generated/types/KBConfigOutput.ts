import type { LLMConfig } from './LLMConfig.ts'
import type { StorageConfig } from './StorageConfig.ts'

export type KBConfigOutput = {
  config_name?: string | null
  storage_config?: StorageConfig | null
  llm_config?: LLMConfig | null
}