import type { AgentConfigOutput } from "./AgentConfigOutput.ts";
import type { AgentModule } from "./AgentModule.ts";
import type { DataGenerationConfig } from "./DataGenerationConfig.ts";

export type AgentDeploymentOutput = {
	/**
	 * @default "agent_deployment"
	 */
	name?: string | null;
	module?: object | AgentModule | null;
	worker_node_url?: string | null;
	/**
	 * @default [object Object]
	 */
	agent_config?: AgentConfigOutput | null;
	/**
	 * @default [object Object]
	 */
	data_generation_config?: DataGenerationConfig | null;
};
