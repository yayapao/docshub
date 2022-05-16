import React, { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import styles from './styles.module.css'

interface DocsHeaderProps {
  title: string
  description: string | ReactNode
  github: string
  npm?: string
  tags?: string[]
  links?: { label: string; link: string }[]
}

export const DocsHeader: React.FC<DocsHeaderProps> = (props) => {
  const { title, description, github, npm, tags, links } = props
  const showTags = tags && Array.isArray(tags) && tags.length > 0
  const showLinks = links && Array.isArray(links) && links.length > 0

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <blockquote>
        <p>
          <strong>{description}</strong>
        </p>
      </blockquote>
      <div className={styles.tagContainer}>
        {github && (
          <Link
            href={github}
            tabIndex={0}
            className={clsx('header-github-link', styles.docsTagItem)}
          ></Link>
        )}
        {npm && (
          <Link
            href={npm}
            tabIndex={0}
            className={clsx('header-npm-link', styles.docsTagItem)}
          ></Link>
        )}
        {showTags && (
          <div className={styles.TagContainer}>
            <span className={styles.divider}>|</span>
            {tags.map((item) => (
              <span className={styles.docsTag}>{item}</span>
            ))}
          </div>
        )}
      </div>
      {showLinks && (
        <div className={styles.linkContainer}>
          <strong className={styles.releatedTitle}>🧿 Related links</strong>
          <div className={styles.headerLinks}>
            {links.map(({ link, label }, index) => (
              <strong className={styles.docsReleatedLink}>
                <a href={link} key={index}>
                  {label}
                </a>
              </strong>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
