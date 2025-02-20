import type { BaseModel } from './BaseModel.ts'
import type { MemoryConfigInput } from './MemoryConfigInput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'

export type MemoryDeploymentInput = {
  node: NodeConfig | NodeConfigInput
  /**
   * @default "memory_deployment"
   */
  name?: string | null
  module?: object | Module | null
  config?: MemoryConfigInput | BaseModel | null
  /**
   * @default false
   */
  initialized?: boolean | null
}