import type { AgentDeploymentOutput } from './AgentDeploymentOutput.ts'
import type { BaseModel } from './BaseModel.ts'
import type { DockerParams } from './DockerParams.ts'
import type { OrchestratorRunOutput } from './OrchestratorRunOutput.ts'

export type AgentRunOutput = {
  /**
   * @type string
   */
  consumer_id: string
  inputs?: object | BaseModel | DockerParams | null
  /**
   * @type object
   */
  deployment: AgentDeploymentOutput
  /**
   * @type array | undefined
   */
  orchestrator_runs?: OrchestratorRunOutput[]
  /**
   * @default "pending"
   * @type string | undefined
   */
  status?: string
  /**
   * @default false
   * @type boolean | undefined
   */
  error?: boolean
  id?: string | null
  /**
   * @type array | undefined
   */
  results?: string[]
  error_message?: string | null
  created_time?: string | null
  start_processing_time?: string | null
  completed_time?: string | null
  duration?: number | null
  input_schema_ipfs_hash?: string | null
  /**
   * @type string
   */
  signature: string
}