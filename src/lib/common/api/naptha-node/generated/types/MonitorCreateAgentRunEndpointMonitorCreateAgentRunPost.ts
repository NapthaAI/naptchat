import type { AgentRunInput } from "./AgentRunInput.ts";
import type { AgentRunOutput } from "./AgentRunOutput.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost200 = AgentRunOutput;

/**
 * @description Validation Error
 */
export type MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost422 = HttpValidationError;

export type MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationRequest = AgentRunInput;

export type MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationResponse =
	MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost200;

export type MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutation = {
	Response: MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost200;
	Request: MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationRequest;
	Errors: MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost422;
};
