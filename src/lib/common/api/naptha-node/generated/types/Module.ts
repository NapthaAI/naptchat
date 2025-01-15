import type { ModuleExecutionType } from './ModuleExecutionType.ts'
import type { ModuleType } from './ModuleType.ts'

export type Module = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  description: string
  /**
   * @type string
   */
  author: string
  /**
   * @type string
   */
  module_url: string
  /**
   * @default "agent"
   */
  module_type?: ModuleType | null
  /**
   * @default "0.1"
   */
  module_version?: string | null
  /**
   * @default "run.py"
   */
  module_entrypoint?: string | null
  /**
   * @default "package"
   */
  execution_type?: ModuleExecutionType | null
}