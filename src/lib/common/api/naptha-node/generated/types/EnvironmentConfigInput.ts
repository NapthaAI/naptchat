import type { StorageConfig } from './StorageConfig.ts'

export type EnvironmentConfigInput = {
  config_name?: string | null
  config_schema?: string | null
  environment_type?: string | null
  storage_config?: StorageConfig | null
}