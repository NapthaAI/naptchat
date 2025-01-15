export const moduleExecutionTypeEnum = {
  package: 'package',
  docker: 'docker',
} as const

export type ModuleExecutionTypeEnum = (typeof moduleExecutionTypeEnum)[keyof typeof moduleExecutionTypeEnum]

export type ModuleExecutionType = ModuleExecutionTypeEnum