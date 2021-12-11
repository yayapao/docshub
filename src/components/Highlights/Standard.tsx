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
  return (
    <div className={styles.standardContent}>
      <span className={styles.standardLabel}>{label}</span>
      <div className={styles.standardVitals}>
        {good && (
          <section className={clsx(styles.vitalsBox, styles.good)}>
            {good}
          </section>
        )}
        {improve && (
          <section className={clsx(styles.vitalsBox, styles.improve)}>
            {improve}
          </section>
        )}
        {bad && (
          <section className={clsx(styles.vitalsBox, styles.bad)}>
            {bad}
          </section>
        )}
      </div>
    </div>
  )
}
