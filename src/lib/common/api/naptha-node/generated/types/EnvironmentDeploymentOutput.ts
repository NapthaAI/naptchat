import type { BaseModel } from './BaseModel.ts'
import type { EnvironmentConfig } from './EnvironmentConfig.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'

export type EnvironmentDeploymentOutput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: EnvironmentConfig | BaseModel | null
  /**
   * @default false
   */
  initialized?: boolean | null
}