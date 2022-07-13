import React, { CSSProperties } from 'react'
import { FaAngellist } from 'react-icons/fa'
import { HighlightWithBadgeProps } from './data'
import clsx from 'clsx'
import styles from './styles.module.css'

/**
 * 高亮当前代码块
 */
export const ResolvedTag: React.FC<{}> = ({}) => {
  return (
    <p className={styles.resolvedTag}>
      <FaAngellist
        style={{ position: 'relative', top: '1px', paddingRight: '2px' }}
      />
      <span>解决方案</span>
    </p>
  )
}
