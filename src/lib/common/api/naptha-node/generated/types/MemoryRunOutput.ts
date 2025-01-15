import type { BaseModel } from './BaseModel.ts'
import type { DockerParams } from './DockerParams.ts'
import type { MemoryDeploymentOutput } from './MemoryDeploymentOutput.ts'
import type { OrchestratorRunOutput } from './OrchestratorRunOutput.ts'

export type MemoryRunOutput = {
  /**
   * @type string
   */
  consumer_id: string
  inputs?: object | BaseModel | DockerParams | null
  /**
   * @type object
   */
  deployment: MemoryDeploymentOutput
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
  results?: (string | null)[]
  error_message?: string | null
  created_time?: string | null
  start_processing_time?: string | null
  completed_time?: string | null
  duration?: number | null
  /**
   * @type string
   */
  signature: string
}