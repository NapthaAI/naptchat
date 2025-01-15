import type { AgentRunOutput } from './AgentRunOutput.ts'
import type { BaseModel } from './BaseModel.ts'
import type { DockerParams } from './DockerParams.ts'
import type { ToolDeploymentOutput } from './ToolDeploymentOutput.ts'

export type ToolRunOutput = {
  /**
   * @type string
   */
  consumer_id: string
  inputs?: object | BaseModel | DockerParams | null
  /**
   * @type object
   */
  deployment: ToolDeploymentOutput
  agent_run?: AgentRunOutput | null
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
  /**
   * @type string
   */
  signature: string
}