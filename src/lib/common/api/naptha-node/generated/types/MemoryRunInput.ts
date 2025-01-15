import type { BaseModel } from './BaseModel.ts'
import type { DockerParams } from './DockerParams.ts'
import type { MemoryDeploymentInput } from './MemoryDeploymentInput.ts'
import type { OrchestratorRunInput } from './OrchestratorRunInput.ts'

export type MemoryRunInput = {
  /**
   * @type string
   */
  consumer_id: string
  inputs?: object | BaseModel | DockerParams | null
  /**
   * @type object
   */
  deployment: MemoryDeploymentInput
  /**
   * @type array | undefined
   */
  orchestrator_runs?: OrchestratorRunInput[]
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

export type MemoryRunInput = {
  /**
   * @type string
   */
  consumer_id: string
  inputs?: object | BaseModel | DockerParams | null
  /**
   * @type object
   */
  deployment: MemoryDeploymentInput
  /**
   * @type array | undefined
   */
  orchestrator_runs?: OrchestratorRunInput[]
  /**
   * @type string
   */
  signature: string
}