export type CompletionRequest = {
  /**
   * @type string
   */
  model: string
  /**
   * @type string
   */
  prompt: string
  /**
   * @default 50
   */
  max_tokens?: number | null
  /**
   * @default 0.7
   */
  temperature?: number | null
}