import { env } from "$env/dynamic/public";
import { orchestratorCheckEndpointOrchestratorCheckPost } from "./generated/index.ts";

export const orchestratorCheck = () =>
	orchestratorCheckEndpointOrchestratorCheckPost(
		{
			// What consumer ID do I use?
			consumer_id: "unknown",

			orchestrator_deployment: {
				name: "orchestrator_1",
				module: { name: "multiagent_chat" },
				orchestrator_node_url: "http://localhost:7001",

				orchestrator_config: {
					config_name: "orchestrator_config_1",
					max_rounds: 10,
				},
			},

			// Is this really mandatory?
			agent_deployments: [],
		},

		{ baseURL: env.NAPTHA_NODE_URL },
	);
