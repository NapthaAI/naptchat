import type { BaseModel } from './BaseModel.ts'
import type { KbConfig } from './KbConfig.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'

export type KbDeploymentInput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: KbConfig | BaseModel | null
  /**
   * @default false
   */
  initialized?: boolean | null
}