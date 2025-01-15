import type { AgentConfigInput } from './AgentConfigInput.ts'
import type { DataGenerationConfig } from './DataGenerationConfig.ts'
import type { EnvironmentDeploymentInput } from './EnvironmentDeploymentInput.ts'
import type { KbDeploymentInput } from './KbDeploymentInput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'
import type { ToolDeploymentInput } from './ToolDeploymentInput.ts'

export type AgentDeploymentInput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: AgentConfigInput | null
  data_generation_config?: DataGenerationConfig | null
  tool_deployments?: ToolDeploymentInput[] | null
  kb_deployments?: KbDeploymentInput[] | null
  environment_deployments?: EnvironmentDeploymentInput[] | null
  /**
   * @default false
   */
  initialized?: boolean | null
}