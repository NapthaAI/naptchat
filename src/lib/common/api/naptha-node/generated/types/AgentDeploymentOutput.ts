import type { AgentConfigOutput } from './AgentConfigOutput.ts'
import type { DataGenerationConfig } from './DataGenerationConfig.ts'
import type { EnvironmentDeploymentOutput } from './EnvironmentDeploymentOutput.ts'
import type { KbDeploymentOutput } from './KbDeploymentOutput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'
import type { ToolDeploymentOutput } from './ToolDeploymentOutput.ts'

export type AgentDeploymentOutput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: AgentConfigOutput | null
  data_generation_config?: DataGenerationConfig | null
  tool_deployments?: ToolDeploymentOutput[] | null
  kb_deployments?: KbDeploymentOutput[] | null
  environment_deployments?: EnvironmentDeploymentOutput[] | null
  /**
   * @default false
   */
  initialized?: boolean | null
}