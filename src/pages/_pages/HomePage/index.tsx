import React from 'react'
import styles from './styles.module.css'

import HeaderView from './atoms/HeaderView'

const HomePage: React.FC = () => {
  return (
    <main className={styles.Container}>
      <HeaderView />
      <footer className={styles.Footer}>
        {/* <a href="https://beian.miit.gov.cn/" target="_blank">
          Copyright © 2022 粤ICP备20070108号
        </a> */}
      </footer>
    </main>
  )
}

export default HomePage
