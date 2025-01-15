import type { BaseModel } from './BaseModel.ts'
import type { DataGenerationConfig } from './DataGenerationConfig.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'
import type { ToolConfigOutput } from './ToolConfigOutput.ts'

export type ToolDeploymentOutput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: ToolConfigOutput | BaseModel | null
  data_generation_config?: DataGenerationConfig | null
  /**
   * @default false
   */
  initialized?: boolean | null
}