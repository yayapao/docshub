import React, { useState, useMemo, useEffect } from 'react'

import Layout from '@theme/Layout'
import clsx from 'clsx'
import ShowcaseCard from './_components/ShowcaseCard'
import styles from './styles.module.css'
import { getRepos, getProjects } from './_showcase.config'

const TITLE = 'Genki Dama 🤛'
const DESCRIPTION = 'The accumulated learnings is focused on a specific point.'

const repos = getRepos()
const projects = getProjects()

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
    <main>
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container">
          <div
            className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}
          >
            <h2>FTE(Frontend Trustworthy Engineering)</h2>
          </div>
          <ul className={styles.showcaseList}>
            {projects &&
              projects.map((u) => {
                return <ShowcaseCard key={u.key} application={u} />
              })}
          </ul>
        </div>
      </section>
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container margin-top--lg">
          <h2 className={styles.showcaseHeader}>My repos</h2>
          <ul className={styles.showcaseList}>
            {repos &&
              repos.map((u) => {
                return <ShowcaseCard key={u.key} application={u} />
              })}
          </ul>
        </div>
      </section>
    </main>
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
