import React, { useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HeaderTyper from './components/HeaderTyper'
import PrimaryButton from '@site/src/components/Button/PrimaryButton'
import GithubButton from '@site/src/components/Button/GithubButton'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import MouseScroller from './MouseScroller'
import Astronaut from '../Astronaut'
import { shuffle } from 'ele-utility'
import styles from './styles.module.css'

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext()
  const { windowHeight } = useWindowSize()
  const [toTypeWords] = useState(
    shuffle([
      'simple',
      'straightforward',
      'understandable',
      'boilerplate free',
      'flexible',
      'fun',
    ])
  )

  return (
    <div
      className={styles.Container}
      style={{ height: windowHeight > 800 ? windowHeight : undefined }}
    >
      <div>
        <h1 className={styles.HeaderTitle}>
          State Management <span className={styles.SeparatorText}>made</span>
        </h1>
        <HeaderTyper
          className={styles.HeaderTyper}
          words={toTypeWords}
          delay={5000}
          defaultText={toTypeWords[0] || 'simple'}
        />
        <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
        <div className={styles.ButtonContainer}>
          <PrimaryButton
            className={styles.GetStartedButton}
            to={'/docs/introduction'}
          >
            GET STARTED
          </PrimaryButton>
          <GithubButton
            className={styles.GithubButton}
            to={siteConfig.customFields.githubUrl as any}
          />
        </div>
      </div>
      <Astronaut className={styles.AstronautImage} />
      {windowHeight > 900 && windowHeight < 1200 && <MouseScroller />}
    </div>
  )
}

export default HeaderView
