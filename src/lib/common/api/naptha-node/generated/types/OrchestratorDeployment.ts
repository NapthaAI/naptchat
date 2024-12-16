import type { OrchestratorConfig } from "./OrchestratorConfig.ts";

export type OrchestratorDeployment = {
	/**
	 * @default "orchestrator_deployment"
	 */
	name?: string | null;
	/**
	 * @type object
	 */
	module: object;
	/**
	 * @default "http://localhost:7001"
	 */
	orchestrator_node_url?: string | null;
	/**
	 * @default [object Object]
	 */
	orchestrator_config?: OrchestratorConfig | null;
};
