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
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'personal'
  | 'performance'
  | 'errors'
