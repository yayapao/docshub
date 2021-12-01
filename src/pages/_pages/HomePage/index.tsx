import React from 'react'
import styles from './styles.module.css'

import HeaderView from './atoms/HeaderView';

const HomePage: React.FC = () => {
  return (
    <main className={styles.Container}>
      <HeaderView />
    </main>
  )
}

export default HomePage
