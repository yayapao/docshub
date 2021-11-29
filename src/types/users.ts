export type Tag = {
  label: string
  description: string
  color: string
}

export type User = {
  key: string
  title: string
  description: string
  preview: any
  website: string
  github?: string | null
  tags?: TagType[]
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'i18n'
  | 'versioning'
  | 'large'
  | 'meta'
  | 'personal'
  | 'rtl'
