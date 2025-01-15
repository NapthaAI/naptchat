export const storageTypeEnum = {
  db: 'db',
  fs: 'fs',
  ipfs: 'ipfs',
} as const

export type StorageTypeEnum = (typeof storageTypeEnum)[keyof typeof storageTypeEnum]

export type StorageType = StorageTypeEnum