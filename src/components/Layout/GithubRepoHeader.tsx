import React, { ReactNode } from 'react'
import styles from './styles.module.css'

interface GithubRepoHeaderProps {
  title: string
  description: string | ReactNode
  shields?: { link: string; imgSrc: string; alt: string }[]
  avatar?: string
  links?: { label: string; link: string }[]
}

export const GithubRepoHeader: React.FC<GithubRepoHeaderProps> = (props) => {
  const { title, description, shields, links, avatar } = props
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <blockquote>
        <p>
          <strong>{description}</strong>
        </p>
      </blockquote>
      <p>
        {avatar && (
          <img src={avatar} alt="lintdd" style={{ height: '160px' }} />
        )}
      </p>
      <p className={styles.headerLinks}>
        {links &&
          Array.isArray(links) &&
          links.length > 0 &&
          links.map(({ link, label }, index) => (
            <strong>
              <a href={link} key={index}>
                {label}
              </a>
              {index < links.length - 1 && (
                <span className={styles.divider}>|</span>
              )}
            </strong>
          ))}
      </p>
      <p className={styles.headerShields}>
        {shields &&
          Array.isArray(shields) &&
          shields.length > 0 &&
          shields.map(({ link, imgSrc, alt }, index) => (
            <a href={link} key={index}>
              <img src={imgSrc} alt={alt} />
            </a>
          ))}
      </p>
    </header>
  )
}
