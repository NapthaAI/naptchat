import type { BaseModel } from './BaseModel.ts'
import type { EnvironmentConfigInput } from './EnvironmentConfigInput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'

export type EnvironmentDeploymentInput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: EnvironmentConfigInput | BaseModel | null
  /**
   * @default false
   */
  initialized?: boolean | null
}