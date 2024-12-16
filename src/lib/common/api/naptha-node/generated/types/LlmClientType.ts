export const llmClientTypeEnum = {
	openai: "openai",
	azure_openai: "azure_openai",
	anthropic: "anthropic",
	vllm: "vllm",
	litellm: "litellm",
	ollama: "ollama",
} as const;

export type LlmClientTypeEnum = (typeof llmClientTypeEnum)[keyof typeof llmClientTypeEnum];

export type LlmClientType = LlmClientTypeEnum;
