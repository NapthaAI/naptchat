import type { HttpValidationError } from "./HttpValidationError.ts";
import type { OrchestratorRunInput } from "./OrchestratorRunInput.ts";
import type { OrchestratorRunOutput } from "./OrchestratorRunOutput.ts";

/**
 * @description Successful Response
 */
export type OrchestratorCheckEndpointOrchestratorCheckPost200 = OrchestratorRunOutput;

/**
 * @description Validation Error
 */
export type OrchestratorCheckEndpointOrchestratorCheckPost422 = HttpValidationError;

export type OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest = OrchestratorRunInput;

export type OrchestratorCheckEndpointOrchestratorCheckPostMutationResponse =
	OrchestratorCheckEndpointOrchestratorCheckPost200;

export type OrchestratorCheckEndpointOrchestratorCheckPostMutation = {
	Response: OrchestratorCheckEndpointOrchestratorCheckPost200;
	Request: OrchestratorCheckEndpointOrchestratorCheckPostMutationRequest;
	Errors: OrchestratorCheckEndpointOrchestratorCheckPost422;
};
