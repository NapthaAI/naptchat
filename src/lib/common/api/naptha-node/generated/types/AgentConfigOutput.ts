import type { BaseModel } from "./BaseModel.ts";
import type { LlmConfig } from "./LlmConfig.ts";

export type AgentConfigOutput = {
	config_name?: string | null;
	llm_config?: LlmConfig | null;
	persona_module?: object | BaseModel | null;
	system_prompt?: object | BaseModel | null;
};
