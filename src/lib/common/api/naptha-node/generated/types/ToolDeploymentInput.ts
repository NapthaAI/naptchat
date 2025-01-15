import type { BaseModel } from './BaseModel.ts'
import type { DataGenerationConfig } from './DataGenerationConfig.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'
import type { ToolConfigInput } from './ToolConfigInput.ts'

export type ToolDeploymentInput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: ToolConfigInput | BaseModel | null
  data_generation_config?: DataGenerationConfig | null
  /**
   * @default false
   */
  initialized?: boolean | null
}