import React, { useState, useMemo, useEffect } from 'react'

import Layout from '@theme/Layout'
import ShowcaseCard from './_components/ShowcaseCard'
import { User } from '@site/src/types/users'
import styles from './styles.module.css'

const TITLE = 'Docs For Repositories'
const DESCRIPTION = 'List of the documents for npm or repositories!'

const users: User[] = [
  {
    key: 'wpmonit',
    title: 'wpmonit',
    description: 'Web performance measure SDK!',
    preview:
      'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/repo/wpmonit.jpg',
    github: 'https://github.com/Y-lonelY/wpmonit',
    npm: 'https://www.npmjs.com/package/wpmonit',
    website: '/docs/repo/wpmonit/readme',
  },
  {
    key: 'reactErrorCatcher',
    title: 'React Error Catcher',
    description: 'Powerful error catcher in React!',
    preview:
      'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/repo/react-error-catcher.jpg',
    github: 'https://github.com/Y-lonelY/react-error-catcher',
    npm: 'https://www.npmjs.com/package/react-error-catcher',
    website: '/docs/repo/react-error-catcher/readme',
  },
]


function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
    </section>
  )
}

function ShowcaseCards() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container margin-top--lg">
        <h2 className={styles.showcaseHeader}>My repos</h2>
        <ul className={styles.showcaseList}>
          {users &&
            users.map((u) => {
              return <ShowcaseCard key={u.key} user={u} />
            })}
        </ul>
      </div>
    </section>
  )
}

function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </Layout>
  )
}

export default Showcase
