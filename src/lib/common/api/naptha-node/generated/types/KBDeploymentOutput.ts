import type { BaseModel } from './BaseModel.ts'
import type { KBConfigOutput } from './KBConfigOutput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'

export type KBDeploymentOutput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: KBConfigOutput | BaseModel | null
  /**
   * @default false
   */
  initialized?: boolean | null
}