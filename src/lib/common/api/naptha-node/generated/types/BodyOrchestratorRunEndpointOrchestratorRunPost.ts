import type { OrchestratorRunInput } from "./OrchestratorRunInput.ts";
import type { SecretInput } from "./SecretInput.ts";

export type BodyOrchestratorRunEndpointOrchestratorRunPost = {
	/**
	 * @type object
	 */
	orchestrator_run_input: OrchestratorRunInput;
	/**
	 * @type array | undefined
	 */
	secrets?: SecretInput[];
};
