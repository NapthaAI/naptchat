export const LLMClientTypeEnum = {
  openai: 'openai',
  azure_openai: 'azure_openai',
  anthropic: 'anthropic',
  vllm: 'vllm',
  litellm: 'litellm',
  ollama: 'ollama',
  stability: 'stability',
} as const

export type LLMClientTypeEnum = (typeof LLMClientTypeEnum)[keyof typeof LLMClientTypeEnum]

export type LLMClientType = LLMClientTypeEnum