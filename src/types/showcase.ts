export type Tag = {
  label: string
  description: string
  color: string
}

export type Application = {
  key: string
  title: string
  description: string
  preview: any
  website: string
  tags: TagType[]
  github?: string
  npm?: string
  isCore?: boolean
}

export type TagType =
  | 'favorite'
  | 'core'
  | 'opensource'
  | 'product'
  | 'design'
  | 'personal'
  | 'performance'
  | 'errors'
  | 'ESLint'
