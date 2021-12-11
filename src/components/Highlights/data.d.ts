import { CSSProperties } from 'react'

export interface HighlightWithBadgeProps {
  label: string
  inactive?: boolean
  supcolor?: string
  style?: CSSProperties
}

export interface VitalsSrandardProps {
  label: string
  good?: string
  improve?: string
  bad?: string
}