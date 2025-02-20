import type { AgentConfigInput } from './AgentConfigInput.ts'
import type { DataGenerationConfig } from './DataGenerationConfig.ts'
import type { EnvironmentDeploymentInput } from './EnvironmentDeploymentInput.ts'
import type { KBDeploymentInput } from './KBDeploymentInput.ts'
import type { MemoryDeploymentInput } from './MemoryDeploymentInput.ts'
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
  kb_deployments?: KBDeploymentInput[] | null
  memory_deployments?: MemoryDeploymentInput[] | null
  environment_deployments?: EnvironmentDeploymentInput[] | null
  /**
   * @default false
   */
  initialized?: boolean | null
}