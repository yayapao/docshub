import React, { useState, useMemo, useEffect } from 'react'

import Layout from '@theme/Layout'
import ShowcaseCard from './_components/ShowcaseCard'
import styles from './styles.module.css'
import { getRepos } from './_showcase.config'

const TITLE = 'Docs For Repositories'
const DESCRIPTION = 'List of the documents for npm or repositories!'

const repos = getRepos()

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
          {repos &&
            repos.map((u) => {
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
