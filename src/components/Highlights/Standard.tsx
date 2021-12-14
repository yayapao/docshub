import React, { CSSProperties } from 'react'
import { VitalsSrandardProps } from './data'
import clsx from 'clsx'
import styles from './styles.module.css'

export const VitalStandard: React.FC<VitalsSrandardProps> = ({
  label,
  good,
  improve,
  bad,
}) => {
  if (!good && !improve && !bad) {
    throw new Error('good、improve or bad is required')
  }
  const g = good && 1 || 0
  const i = improve && 1 || 0
  const b = bad && 1 || 0
  const width = 100 / (g + i + b)
  return (
    <div className={styles.standardContent}>
      <span className={styles.standardLabel}>{label}</span>
      <div className={styles.standardVitals}>
        {good && (
          <section
            className={clsx(styles.vitalsBox, styles.good)}
            style={{ width: `${width}%` }}
          >
            {good}
          </section>
        )}
        {improve && (
          <section
            className={clsx(styles.vitalsBox, styles.improve)}
            style={{ width: `${width}%` }}
          >
            {improve}
          </section>
        )}
        {bad && (
          <section
            className={clsx(styles.vitalsBox, styles.bad)}
            style={{ width: `${width}%` }}
          >
            {bad}
          </section>
        )}
      </div>
    </div>
  )
}
