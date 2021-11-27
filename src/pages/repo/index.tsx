import React, { useState, useMemo, useEffect } from 'react'

import Layout from '@theme/Layout'
import ShowcaseCard from './_components/ShowcaseCard'
import { User } from '@site/src/types/users'
import styles from './styles.module.css'

const TITLE = 'Docusaurus Site Showcase'
const DESCRIPTION = 'List of websites people are building with Docusaurus'
const EDIT_URL =
  'https://github.com/facebook/docusaurus/edit/main/website/src/data/users.tsx'

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        href={EDIT_URL}
        target="_blank"
        rel="noreferrer"
      >
        🙏 Please add your site
      </a>
    </section>
  )
}

function ShowcaseCards() {
  const user: User = {
    title: 'hello',
    description: 'hello',
    preview: 'https://up-server-common-1305955125.cos.ap-shanghai.myqcloud.com/fe/metrics/coding.jpg?imageMogr2/thumbnail/!50p',
    source: 'https://github.com/Y-lonelY/upDocs',
    website: 'https://github.com/Y-lonelY/upDocs'
  }
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container margin-top--lg">
        <h2 className={styles.showcaseHeader}>All sites</h2>
        <ul className={styles.showcaseList}>
          <ShowcaseCard key="test" user={user} />
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
