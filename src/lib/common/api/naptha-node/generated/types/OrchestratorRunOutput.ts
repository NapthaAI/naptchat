import type { AgentDeploymentOutput } from "./AgentDeploymentOutput.ts";
import type { AgentRunOutput } from "./AgentRunOutput.ts";
import type { BaseModel } from "./BaseModel.ts";
import type { DockerParams } from "./DockerParams.ts";
import type { EnvironmentDeploymentOutput } from "./EnvironmentDeploymentOutput.ts";
import type { OrchestratorDeployment } from "./OrchestratorDeployment.ts";

export type OrchestratorRunOutput = {
	/**
	 * @type string
	 */
	consumer_id: string;
	inputs?: object | BaseModel | DockerParams | null;
	/**
	 * @type object
	 */
	orchestrator_deployment: OrchestratorDeployment;
	/**
	 * @type array
	 */
	agent_deployments: AgentDeploymentOutput[];
	environment_deployments?: EnvironmentDeploymentOutput[] | null;
	/**
	 * @default "pending"
	 * @type string | undefined
	 */
	status?: string;
	/**
	 * @default false
	 * @type boolean | undefined
	 */
	error?: boolean;
	id?: string | null;
	/**
	 * @type array | undefined
	 */
	results?: string[];
	error_message?: string | null;
	created_time?: string | null;
	start_processing_time?: string | null;
	completed_time?: string | null;
	duration?: number | null;
	/**
	 * @type array | undefined
	 */
	agent_runs?: AgentRunOutput[];
	input_schema_ipfs_hash?: string | null;
};