import React, { useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HeaderTyper from './Typer'
import PrimaryButton from '@site/src/components/Button/PrimaryButton'
import GithubButton from '@site/src/components/Button/GithubButton'
import { useWindowSize } from '@site/src/hooks/useWindowSize'
import MouseScroller from './MouseScroller'
import Astronaut from '../Astronaut'
import { shuffle } from 'ele-utility'
import styles from './styles.module.css'

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext()
  const { windowHeight } = useWindowSize()
  const [toTypeWords] = useState(shuffle(['技术文档']))

  return (
    <div
      className={styles.Container}
      style={{ height: windowHeight > 800 ? windowHeight - 106 : undefined }}
    >
      <div>
        <h1 className={styles.HeaderTitle}>
          <span className={styles.SeparatorText}>思考 </span>沉淀
          <span className={styles.SeparatorText}> 学习 </span>分享
        </h1>
        <HeaderTyper
          className={styles.HeaderTyper}
          words={toTypeWords}
          delay={5000}
          defaultText={toTypeWords[0] || 'simple'}
        />
        {/* <div className={styles.ButtonContainer}>
          <PrimaryButton className={styles.GetStartedButton} to={'/blog'}>
            GET STARTED
          </PrimaryButton>
          <GithubButton
            className={styles.GithubButton}
            to={siteConfig.customFields.githubUrl as any}
          />
        </div> */}
      </div>
      <Astronaut className={styles.AstronautImage} />
      {/* {windowHeight > 900 && windowHeight < 1200 && <MouseScroller />} */}
    </div>
  )
}

export default HeaderView
