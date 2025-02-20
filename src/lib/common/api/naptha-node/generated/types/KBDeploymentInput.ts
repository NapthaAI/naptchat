import type { BaseModel } from './BaseModel.ts'
import type { KBConfigInput } from './KBConfigInput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'

export type KBDeploymentInput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: KBConfigInput | BaseModel | null
  /**
   * @default false
   */
  initialized?: boolean | null
}