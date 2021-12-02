import React, { CSSProperties } from 'react'

export const HighlightWithCode: React.FC<{ bgcolor: string }> = ({
  children,
  bgcolor,
}) => (
  <code
    style={{
      backgroundColor: bgcolor,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}
  >
    {children}
  </code>
)

export const HighlightWithText: React.FC<{ bgcolor?: string, style?: CSSProperties }> = ({
  children,
  bgcolor = '#7385e4',
  style = {}
}) => (
  <span
    style={{
      display: 'inline-block',
      backgroundColor: bgcolor,
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
