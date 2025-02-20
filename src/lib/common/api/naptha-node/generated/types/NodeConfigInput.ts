export type NodeConfigInput = {
  /**
   * @type string
   */
  ip: string
  user_communication_port?: number | null
  user_communication_protocol?: string | null
}