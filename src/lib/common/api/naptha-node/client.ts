import {
	orchestratorCheckEndpointOrchestratorCheckPost,
	userCheckEndpointUserCheckPost,
	userRegisterEndpointUserRegisterPost,
	type NodeConfig,
} from "./generated/index.ts";
import { v4 as uuidv4 } from "uuid";
import type { User } from "./types";
import type { ResponseConfig } from "@kubb/plugin-client/clients/axios";
import type { ByPublicKey } from "$common/types";
import { NAPTHA_NODE_HTTP_PORT, NAPTHA_NODE_HOSTNAME } from "$common/constants";

const REQUEST_CONFIG = {
	baseURL: "http://" + [NAPTHA_NODE_HOSTNAME, NAPTHA_NODE_HTTP_PORT].join(":"),
};

const NODE_CONFIG: Pick<NodeConfig, "ip" | "http_port"> = {
	ip: NAPTHA_NODE_HOSTNAME,
	http_port: parseInt(NAPTHA_NODE_HTTP_PORT),
};

export const userRegister = (): Promise<ResponseConfig<User>> =>
	userRegisterEndpointUserRegisterPost({ public_key: uuidv4() }, REQUEST_CONFIG);

export const userCheck = ({
	publicKey,
}: ByPublicKey): Promise<ResponseConfig<User & { is_registered: boolean }>> =>
	userCheckEndpointUserCheckPost({ public_key: publicKey }, REQUEST_CONFIG);

export const multiagentChatOrchestratorCheck = ({ publicKey }: ByPublicKey) =>
	orchestratorCheckEndpointOrchestratorCheckPost(
		{
			consumer_id: publicKey,

			deployment: {
				name: "multiagent_chat",
				module: { id: "orchestrator:multiagent_chat", name: "multiagent_chat" },
				orchestrator_node_url: "http://localhost:7001",
			},

			agent_deployments: [
				{ worker_node_url: "ws://localhost:7002" },
				{ worker_node_url: "ws://localhost:7002" },
			],

			environment_deployments: [{ environment_node_url: "http://localhost:7001" }],
		},

		REQUEST_CONFIG,
	);
