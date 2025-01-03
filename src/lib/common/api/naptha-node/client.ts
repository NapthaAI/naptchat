import { env } from "$env/dynamic/public";
import {
	orchestratorCheckEndpointOrchestratorCheckPost,
	userCheckEndpointUserCheckPost,
	userRegisterEndpointUserRegisterPost,
} from "./generated/index.ts";
import { v4 as uuidv4 } from "uuid";
import type { User } from "./types";
import type { ResponseConfig } from "@kubb/plugin-client/clients/axios";
import type { ByPublicKey } from "$common/types";

export const userRegister = (): Promise<ResponseConfig<User>> =>
	userRegisterEndpointUserRegisterPost({ public_key: uuidv4() }, { baseURL: env.NAPTHA_NODE_URL });

export const userCheck = ({
	publicKey,
}: ByPublicKey): Promise<ResponseConfig<User & { is_registered: boolean }>> =>
	userCheckEndpointUserCheckPost({ public_key: publicKey }, { baseURL: env.NAPTHA_NODE_URL });

export const multiagentChatOrchestratorCheck = ({ publicKey }: ByPublicKey) =>
	orchestratorCheckEndpointOrchestratorCheckPost(
		{
			consumer_id: publicKey,

			orchestrator_deployment: {
				name: "multiagent_chat",
				module: { name: "multiagent_chat" },
				orchestrator_node_url: "http://localhost:7001",

				// agent_deployments: [
				// 	{ worker_node_url: "ws://localhost:7002" },
				// 	{ worker_node_url: "ws://localhost:7002" },
				// ],

				// environment_deployments: [{ environment_node_url: "http://localhost:7001" }],
			},

			// Is this really mandatory?
			agent_deployments: [],
		},

		{ baseURL: env.NAPTHA_NODE_URL },
	);
