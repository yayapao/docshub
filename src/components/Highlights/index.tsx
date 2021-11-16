import React from 'react'

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
