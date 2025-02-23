import {
	environmentCheckEndpointEnvironmentCheckPost,
	orchestratorCheckEndpointOrchestratorCheckPost,
	orchestratorRunEndpointOrchestratorRunPost,
	userCheckEndpointUserCheckPost,
	userRegisterEndpointUserRegisterPost,
	type OrchestratorDeploymentInput,
} from "./generated/index.ts";
import type { BySignature, ByUserId, User } from "./types";
import type { ResponseConfig } from "@kubb/plugin-client/clients/axios";
import type { ByPublicKey } from "$common/types";
import {
	NAPTHA_NODE_HTTP_PORT,
	NAPTHA_NODE_HOSTNAME,
	MULTIAGENT_CHAT_MODULE_NAME,
	MULTIAGENT_CHAT_MODULE_ID,
	MULTIAGENT_CHAT_DEPLOYMENT_NAME,
	MULTIAGENT_CHAT_MODULE_TYPE,
} from "$common/constants";

const REQUEST_CONFIG = {
	baseURL: "https://" + [NAPTHA_NODE_HOSTNAME, NAPTHA_NODE_HTTP_PORT].join(":"),
};

export const ORCHESTRATOR_DEPLOYMENT_CONFIG: OrchestratorDeploymentInput = {
	name: MULTIAGENT_CHAT_DEPLOYMENT_NAME,
	node: { ip: NAPTHA_NODE_HOSTNAME },

	module: {
		id: MULTIAGENT_CHAT_MODULE_ID,
		module_type: MULTIAGENT_CHAT_MODULE_TYPE,
		name: MULTIAGENT_CHAT_MODULE_NAME,
	},

	agent_deployments: [
		{ node: { ip: NAPTHA_NODE_HOSTNAME } },
		{ node: { ip: NAPTHA_NODE_HOSTNAME } },
	],

	kb_deployments: [{ node: { ip: NAPTHA_NODE_HOSTNAME } }],
};

export const userRegister = (public_key: string): Promise<ResponseConfig<User>> =>
	userRegisterEndpointUserRegisterPost({ public_key }, REQUEST_CONFIG);

export const userCheck = ({
	publicKey,
}: ByPublicKey): Promise<ResponseConfig<User & { is_registered: boolean }>> =>
	userCheckEndpointUserCheckPost({ public_key: publicKey }, REQUEST_CONFIG);

export const multiagentChatOrchestratorCheck = ({ userId, signature }: ByUserId & BySignature) =>
	orchestratorCheckEndpointOrchestratorCheckPost(
		{
			consumer_id: userId,
			signature,
			deployment: ORCHESTRATOR_DEPLOYMENT_CONFIG,
		},

		REQUEST_CONFIG,
	);

export const multiagentChatOrchestratorRun = ({ userId, signature }: ByUserId & BySignature) =>
	orchestratorRunEndpointOrchestratorRunPost(
		{
			consumer_id: userId,
			signature,
			deployment: ORCHESTRATOR_DEPLOYMENT_CONFIG,
		},

		REQUEST_CONFIG,
	);
