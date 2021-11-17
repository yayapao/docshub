import React, { CSSProperties } from 'react'

export const HighlightWithCode: React.FC<{ bgColor: string }> = ({
  children,
  bgColor,
}) => (
  <code
    style={{
      backgroundColor: bgColor,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}
  >
    {children}
  </code>
)

export const HighlightWithText: React.FC<{ bgColor?: string, style?: CSSProperties }> = ({
  children,
  bgColor = '#7385e4',
  style = {}
}) => (
  <span
    style={{
      display: 'inline-block',
      backgroundColor: bgColor,
      borderRadius: '2px',
      color: '#fff',
      padding: '.2rem .3rem',
      wordSpacing: '1.5px',
      marginBottom: 'var(--ifm-leading)',
      ...style
    }}
  >
    {children}
  </span>
)
