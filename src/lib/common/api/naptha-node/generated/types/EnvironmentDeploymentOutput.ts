import type { AgentModule } from "./AgentModule.ts";
import type { BaseModel } from "./BaseModel.ts";

export type EnvironmentDeploymentOutput = {
	/**
	 * @default "environment_deployment"
	 */
	name?: string | null;
	module?: object | AgentModule | null;
	/**
	 * @type string
	 */
	environment_node_url: string;
	/**
	 * @default [object Object]
	 */
	environment_config?: object | BaseModel | null;
};
