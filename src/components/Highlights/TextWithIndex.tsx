import React, { CSSProperties } from 'react'
import styles from './styles.module.css'

/**
 * 添加顺序样式
 */
export const TextWithIndex: React.FC<{
  index?: string
  data?: string | {text: string, index?: string}[]
}> = ({ children, index, data }) => {
  if (typeof data === 'object') {
    return (
      <div>
        {data.map((item, index) => {
          const i = typeof item.index !== 'undefined' ? item.index : index + 1
          return (
            <p className={styles.indexContainer} key={i}>
              <span className={styles.indexNumber}>{i}</span>
              <span dangerouslySetInnerHTML={{ __html: item.text}}></span>
            </p>
          )
        })}
      </div>
    )
  }
  return (
    <p className={styles.indexContainer}>
      <span className={styles.indexNumber}>{index}</span>
      <span>{children}</span>
    </p>
  )
}
