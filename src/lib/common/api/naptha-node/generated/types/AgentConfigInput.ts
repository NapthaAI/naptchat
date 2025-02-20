import type { BaseModel } from './BaseModel.ts'
import type { LLMConfig } from './LLMConfig.ts'
import type { Module } from './Module.ts'

export type AgentConfigInput = {
  config_name?: string | null
  config_schema?: string | null
  llm_config?: LLMConfig | null
  persona_module?: object | Module | null
  system_prompt?: object | BaseModel | null
}