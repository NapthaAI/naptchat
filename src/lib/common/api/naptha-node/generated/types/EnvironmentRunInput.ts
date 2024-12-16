import type { BaseModel } from "./BaseModel.ts";
import type { DockerParams } from "./DockerParams.ts";
import type { EnvironmentDeploymentInput } from "./EnvironmentDeploymentInput.ts";
import type { OrchestratorRunInput } from "./OrchestratorRunInput.ts";

export type EnvironmentRunInput = {
	/**
	 * @type string
	 */
	consumer_id: string;
	inputs?: object | BaseModel | DockerParams | null;
	/**
	 * @type object
	 */
	environment_deployment: EnvironmentDeploymentInput;
	/**
	 * @type array | undefined
	 */
	orchestrator_runs?: OrchestratorRunInput[];
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
	input_schema_ipfs_hash?: string | null;
};

export type EnvironmentRunInput = {
	/**
	 * @type string
	 */
	consumer_id: string;
	inputs?: object | BaseModel | DockerParams | null;
	/**
	 * @type object
	 */
	environment_deployment: EnvironmentDeploymentInput;
	/**
	 * @type array | undefined
	 */
	orchestrator_runs?: OrchestratorRunInput[];
};
