import type { AgentDeploymentOutput } from './AgentDeploymentOutput.ts'
import type { EnvironmentDeploymentOutput } from './EnvironmentDeploymentOutput.ts'
import type { KBDeploymentOutput } from './KBDeploymentOutput.ts'
import type { MemoryDeploymentOutput } from './MemoryDeploymentOutput.ts'
import type { Module } from './Module.ts'
import type { NodeConfig } from './NodeConfig.ts'
import type { NodeConfigInput } from './NodeConfigInput.ts'
import type { OrchestratorConfig } from './OrchestratorConfig.ts'

export type OrchestratorDeploymentOutput = {
  node: NodeConfig | NodeConfigInput
  name?: string | null
  module?: object | Module | null
  config?: OrchestratorConfig | null
  agent_deployments?: AgentDeploymentOutput[] | null
  environment_deployments?: EnvironmentDeploymentOutput[] | null
  kb_deployments?: KBDeploymentOutput[] | null
  memory_deployments?: MemoryDeploymentOutput[] | null
  /**
   * @default false
   */
  initialized?: boolean | null
}