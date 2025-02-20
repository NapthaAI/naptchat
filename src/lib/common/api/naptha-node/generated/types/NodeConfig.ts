import type { NodeServer } from './NodeServer.ts'

export type NodeConfig = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  owner: string
  /**
   * @type string
   */
  public_key: string
  /**
   * @default "localhost"
   * @type string | undefined
   */
  ip?: string
  /**
   * @default "http"
   * @type string | undefined
   */
  user_communication_protocol?: string
  /**
   * @default "ws"
   * @type string | undefined
   */
  node_communication_protocol?: string
  /**
   * @default 7001
   * @type integer | undefined
   */
  user_communication_port?: number
  /**
   * @default 1
   * @type integer | undefined
   */
  num_node_communication_servers?: number
  /**
   * @type array | undefined
   */
  provider_types?: string[]
  /**
   * @type array
   */
  servers: NodeServer[]
  /**
   * @type array
   */
  models: string[]
  /**
   * @type boolean
   */
  docker_jobs: boolean
  ports?: number[] | null
  /**
   * @default "direct"
   */
  routing_type?: string | null
  routing_url?: string | null
  num_gpus?: number | null
  arch?: string | null
  os?: string | null
  ram?: number | null
  vram?: number | null
}