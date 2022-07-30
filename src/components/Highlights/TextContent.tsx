import React, { CSSProperties, useRef } from 'react'
import { HighlightWithBadgeProps } from './data'
import clsx from 'clsx'
import styles from './styles.module.css'

/**
 * 高亮当前代码块
 */
export const HighlightWithCode: React.FC<{
  bgcolor?: string
  code?: string
  children
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
  children
}> = ({ children, bgcolor = '#7385e4', text, style = {} }) => {
  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: bgcolor,
        borderRadius: '3px',
        color: '#fff',
        padding: '.2rem .5rem',
        letterSpacing: '1.5px',
        wordSpacing: '1.5px',
        marginBottom: 'var(--ifm-leading)',
        fontSize: '.675rem',
        fontWeight: 500,
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
  const contentRef = useRef<HTMLSpanElement>()
  let offsetLeft = 0
  if (contentRef.current) {
    offsetLeft = contentRef.current.clientWidth - 10
  }
  return (
    <span
      style={{
        ...defaultStyle,
        ...style,
      }}
      ref={contentRef}
    >
      {label}
      {offsetLeft > 0 && (
        <sup
          className={clsx(styles.dot, !inactive && styles.active)}
          style={{
            backgroundColor: supcolor,
            color: supcolor,
            left: `${offsetLeft}px`,
          }}
        />
      )}
    </span>
  )
}
