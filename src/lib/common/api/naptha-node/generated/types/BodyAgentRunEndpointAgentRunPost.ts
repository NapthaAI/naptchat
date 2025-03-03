import type { AgentRunInput } from './AgentRunInput.ts'
import type { SecretInput } from './SecretInput.ts'

export type BodyAgentRunEndpointAgentRunPost = {
  /**
   * @type object
   */
  agent_run_input: AgentRunInput
  /**
   * @type array | undefined
   */
  secrets?: SecretInput[]
}