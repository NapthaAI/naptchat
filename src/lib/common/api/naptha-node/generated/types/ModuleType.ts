export const moduleTypeEnum = {
  agent: 'agent',
  tool: 'tool',
  environment: 'environment',
  kb: 'kb',
  memory: 'memory',
  orchestrator: 'orchestrator',
  persona: 'persona',
} as const

export type ModuleTypeEnum = (typeof moduleTypeEnum)[keyof typeof moduleTypeEnum]

export type ModuleType = ModuleTypeEnum