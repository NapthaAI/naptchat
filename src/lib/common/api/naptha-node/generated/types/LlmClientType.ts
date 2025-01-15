export const llmClientTypeEnum = {
  openai: 'openai',
  azure_openai: 'azure_openai',
  anthropic: 'anthropic',
  vllm: 'vllm',
  litellm: 'litellm',
  ollama: 'ollama',
  stability: 'stability',
} as const

export type LlmClientTypeEnum = (typeof llmClientTypeEnum)[keyof typeof llmClientTypeEnum]

export type LlmClientType = LlmClientTypeEnum