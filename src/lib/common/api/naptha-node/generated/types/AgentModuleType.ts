export const agentModuleTypeEnum = {
	package: "package",
	docker: "docker",
} as const;

export type AgentModuleTypeEnum = (typeof agentModuleTypeEnum)[keyof typeof agentModuleTypeEnum];

export type AgentModuleType = AgentModuleTypeEnum;
