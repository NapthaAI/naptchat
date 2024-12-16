import type { AgentRunInput } from "./AgentRunInput.ts";
import type { AgentRunOutput } from "./AgentRunOutput.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

/**
 * @description Successful Response
 */
export type MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost200 = AgentRunOutput;

/**
 * @description Validation Error
 */
export type MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost422 = HttpValidationError;

export type MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationRequest = AgentRunInput;

export type MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationResponse =
	MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost200;

export type MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutation = {
	Response: MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost200;
	Request: MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationRequest;
	Errors: MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost422;
};
