import type { AgentConfigInput } from "./AgentConfigInput.ts";
import type { AgentModule } from "./AgentModule.ts";
import type { DataGenerationConfig } from "./DataGenerationConfig.ts";

export type AgentDeploymentInput = {
	/**
	 * @default "agent_deployment"
	 */
	name?: string | null;
	module?: object | AgentModule | null;
	worker_node_url?: string | null;
	/**
	 * @default [object Object]
	 */
	agent_config?: AgentConfigInput | null;
	/**
	 * @default [object Object]
	 */
	data_generation_config?: DataGenerationConfig | null;
};
