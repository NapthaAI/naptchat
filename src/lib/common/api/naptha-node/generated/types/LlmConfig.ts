import type { LlmClientType } from "./LlmClientType.ts";

export type LlmConfig = {
	config_name?: string | null;
	client?: LlmClientType | null;
	model?: string | null;
	max_tokens?: number | null;
	temperature?: number | null;
	api_base?: string | null;
};
