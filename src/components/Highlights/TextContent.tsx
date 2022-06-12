import React, { CSSProperties } from 'react'
import { HighlightWithBadgeProps } from './data'
import clsx from 'clsx'
import styles from './styles.module.css'

/**
 * 高亮当前代码块
 */
export const HighlightWithCode: React.FC<{
  bgcolor?: string
  code?: string
}> = ({ children, bgcolor = 'var(--ifm-color-primary)', code }) => {
  return (
    <code
      style={{
        backgroundColor: bgcolor,
        color: '#fff',
        borderRadius: '2px',
        padding: '0.2rem',
        fontSize: '.75rem',
      }}
    >
      {code || children}
    </code>
  )
}

/**
 * 高亮当前文本
 */
export const HighlightWithText: React.FC<{
  bgcolor?: string
  style?: CSSProperties
  text?: string
}> = ({ children, bgcolor = '#7385e4', text, style = {} }) => {
  return (
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
      {text || children}
    </span>
  )
}


/**
 * 右上角添加小红点
 * @param { sup?: string, style?: CSSProperties }
 * @returns React.FC
 */
export const HighlightWithBadge: React.FC<HighlightWithBadgeProps> = ({
  label,
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
      {label}
      <sup
        className={clsx(styles.dot, !inactive && styles.active)}
        style={{
          backgroundColor: supcolor,
          color: supcolor,
          left: `${label.length * 14 + 2}px`,
        }}
      ></sup>
    </span>
  )
}
