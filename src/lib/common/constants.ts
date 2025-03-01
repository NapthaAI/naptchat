import { env } from "$env/dynamic/public";

export const { NAPTHA_NODE_HOSTNAME = "localhost", NAPTHA_NODE_HTTP_PORT = "7001" } = env;

export const MULTIAGENT_CHAT_DEPLOYMENT_NAME = "multiagent_chat";
export const MULTIAGENT_CHAT_MODULE_NAME = "multiagent_chat";
export const MULTIAGENT_CHAT_MODULE_TYPE = "orchestrator";
export const MULTIAGENT_CHAT_MODULE_ID = `orchestrator:${MULTIAGENT_CHAT_MODULE_NAME}`;
