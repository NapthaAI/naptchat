import {
	orchestratorCheckEndpointOrchestratorCheckPost,
	orchestratorRunEndpointOrchestratorRunPost,
	userCheckEndpointUserCheckPost,
	userRegisterEndpointUserRegisterPost,
} from "./generated/index.ts";
import type { User } from "./types";
import type { ResponseConfig } from "@kubb/plugin-client/clients/axios";
import type { ByPublicKey } from "$common/types";
import {
	NAPTHA_NODE_HTTP_PORT,
	NAPTHA_NODE_HOSTNAME,
	MULTIAGENT_CHAT_MODULE_NAME,
	MULTIAGENT_CHAT_MODULE_ID,
	MULTIAGENT_CHAT_DEPLOYMENT_NAME,
} from "$common/constants";

const REQUEST_CONFIG = {
	baseURL: "http://" + [NAPTHA_NODE_HOSTNAME, NAPTHA_NODE_HTTP_PORT].join(":"),
};

export const userRegister = (public_key: string): Promise<ResponseConfig<User>> =>
	userRegisterEndpointUserRegisterPost({ public_key }, REQUEST_CONFIG);

export const userCheck = ({
	publicKey,
}: ByPublicKey): Promise<ResponseConfig<User & { is_registered: boolean }>> =>
	userCheckEndpointUserCheckPost({ public_key: publicKey }, REQUEST_CONFIG);

export const multiagentChatOrchestratorCheck = ({ publicKey }: ByPublicKey) =>
	orchestratorCheckEndpointOrchestratorCheckPost(
		{
			consumer_id: publicKey,

			deployment: {
				node: { ip: NAPTHA_NODE_HOSTNAME },
				name: MULTIAGENT_CHAT_DEPLOYMENT_NAME,

				module: {
					id: MULTIAGENT_CHAT_MODULE_ID,
					name: MULTIAGENT_CHAT_MODULE_NAME,
				},
			},

			agent_deployments: [
				{ node: { ip: NAPTHA_NODE_HOSTNAME } },
				{ node: { ip: NAPTHA_NODE_HOSTNAME } },
			],
		},

		REQUEST_CONFIG,
	);

export const multiagentChatOrchestratorRun = ({ publicKey }: ByPublicKey) =>
	orchestratorRunEndpointOrchestratorRunPost(
		{
			consumer_id: publicKey,

			deployment: {
				node: { ip: NAPTHA_NODE_HOSTNAME },
				name: MULTIAGENT_CHAT_DEPLOYMENT_NAME,

				module: {
					id: MULTIAGENT_CHAT_MODULE_ID,
					name: MULTIAGENT_CHAT_MODULE_NAME,
				},
			},

			agent_deployments: [
				{ node: { ip: NAPTHA_NODE_HOSTNAME } },
				{ node: { ip: NAPTHA_NODE_HOSTNAME } },
			],
		},

		REQUEST_CONFIG,
	);
