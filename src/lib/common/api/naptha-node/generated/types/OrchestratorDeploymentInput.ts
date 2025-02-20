import type { AgentDeploymentInput } from './AgentDeploymentInput.ts'
import type { EnvironmentDeploymentInput } from './EnvironmentDeploymentInput.ts'
import type { KBDeploymentInput } from './KBDeploymentInput.ts'
import type { MemoryDeploymentInput } from './MemoryDeploymentInput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'
import type { OrchestratorConfig } from './OrchestratorConfig.ts'

export type OrchestratorDeploymentInput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: OrchestratorConfig | null
  agent_deployments?: AgentDeploymentInput[] | null
  environment_deployments?: EnvironmentDeploymentInput[] | null
  kb_deployments?: KBDeploymentInput[] | null
  memory_deployments?: MemoryDeploymentInput[] | null
  /**
   * @default false
   */
  initialized?: boolean | null
}