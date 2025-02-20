import type { BaseModel } from './BaseModel.ts'
import type { MemoryConfigOutput } from './MemoryConfigOutput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'

export type MemoryDeploymentOutput = {
  node: NodeConfig | NodeConfigInput
  /**
   * @default "memory_deployment"
   */
  name?: string | null
  module?: object | Module | null
  config?: MemoryConfigOutput | BaseModel | null
  /**
   * @default false
   */
  initialized?: boolean | null
}