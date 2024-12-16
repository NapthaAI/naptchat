import client from "@kubb/plugin-client/clients/axios";
import type {
	MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationRequest,
	MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationResponse,
	MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost422,
} from "../../types/MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * @description Log a new agent run with orchestrator.
 * @summary Monitor Create Agent Run Endpoint
 * {@link /monitor/create_agent_run}
 */
export async function monitorCreateAgentRunEndpointMonitorCreateAgentRunPost(
	data: MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationRequest,
	config: Partial<
		RequestConfig<MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationRequest>
	> = {},
) {
	const res = await client<
		MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationResponse,
		MonitorCreateAgentRunEndpointMonitorCreateAgentRunPost422,
		MonitorCreateAgentRunEndpointMonitorCreateAgentRunPostMutationRequest
	>({ method: "POST", url: `/monitor/create_agent_run`, data, ...config });

	return res;
}
