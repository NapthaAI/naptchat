import { env } from "$env/dynamic/public";
import {
	orchestratorCheckEndpointOrchestratorCheckPost,
	userRegisterEndpointUserRegisterPost,
} from "./generated/index.ts";
import { v4 as uuidv4 } from "uuid";
import type { User } from "./types";
import type { ResponseConfig } from "@kubb/plugin-client/clients/axios";

export const userRegister = (): Promise<ResponseConfig<User>> =>
	userRegisterEndpointUserRegisterPost({ public_key: uuidv4() }, { baseURL: env.NAPTHA_NODE_URL });

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
