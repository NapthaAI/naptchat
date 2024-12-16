import client from "@kubb/plugin-client/clients/axios";
import type {
	MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationRequest,
	MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationResponse,
	MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost422,
} from "../../types/MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Update an existing agent run with orchestrator.
 * @summary Monitor Update Agent Run Endpoint
 * {@link /monitor/update_agent_run}
 */
export async function monitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost(
	data: MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationRequest,
	config: Partial<
		RequestConfig<MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationRequest>
	> = {},
) {
	const res = await client<
		MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationResponse,
		MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPost422,
		MonitorUpdateAgentRunEndpointMonitorUpdateAgentRunPostMutationRequest
	>({ method: "POST", url: `/monitor/update_agent_run`, data, ...config });

	return res;
}
