import type { ValidationError } from './ValidationError.ts'

export type HttpValidationError = {
  /**
   * @type array | undefined
   */
  detail?: ValidationError[]
}