import type { StorageConfig } from './StorageConfig.ts'

export type EnvironmentConfigOutput = {
  config_name?: string | null
  config_schema?: string | null
  environment_type?: string | null
  storage_config?: StorageConfig | null
}