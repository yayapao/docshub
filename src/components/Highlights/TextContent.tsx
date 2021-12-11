import React, { CSSProperties } from 'react'
import { HighlightWithBadgeProps } from './data'
import clsx from 'clsx'
import styles from './styles.module.css'

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

export const HighlightWithText: React.FC<{
  bgcolor?: string
  style?: CSSProperties
}> = ({ children, bgcolor = '#7385e4', style = {} }) => (
  <span
    style={{
      display: 'inline-block',
      backgroundColor: bgcolor,
      borderRadius: '2px',
      color: '#fff',
      padding: '.2rem .3rem',
      wordSpacing: '1.5px',
      marginBottom: 'var(--ifm-leading)',
      ...style,
    }}
  >
    {children}
  </span>
)

/**
 * 右上角添加小红点
 * @param { sup?: string, style?: CSSProperties }
 * @returns React.FC
 */
export const HighlightWithBadge: React.FC<HighlightWithBadgeProps> = ({
  children,
  inactive,
  supcolor = '#7385e4',
  style = {},
}) => {
  const defaultStyle = {
    display: 'inline-block',
    fontWeight: 'bold',
    padding: '0 .2rem',
  }
  return (
    <span
      style={{
        ...defaultStyle,
        ...style,
      }}
    >
      {children}
      <sup
        className={clsx(styles.dot, !inactive && styles.active)}
        style={{
          backgroundColor: supcolor,
          color: supcolor,
        }}
      ></sup>
    </span>
  )
}
