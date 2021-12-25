/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import FavoriteIcon from '@site/src/components/Icons/FavoriteIcon'
import styles from './styles.module.css'
import { Application, Tag, TagType } from '@site/src/types/showcase'
import { Tags } from '../../_showcase.config'

interface Props extends Tag {
  id: string
}

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({ label, color, description }, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{ backgroundColor: color }} />
    </li>
  )
)

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }))

  return (
    <>
      {tagObjects.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`

        return <TagComp key={index} {...tagObject} />
      })}
    </>
  )
}

const ShowcaseCard = memo(({ application }: { application: Application }) => (
  <li key={application.title} className="card shadow--md">
    <div className={clsx('card__image', styles.showcaseCardImage)}>
      <img src={application.preview} alt={application.title} />
    </div>
    <div className="card__body">
      <div className={clsx(styles.showcaseCardHeader)}>
        {application.isCore && (
          <FavoriteIcon size="small" svgClass={styles.svgIconFavorite} />
        )}
        <h4 className={styles.showcaseCardTitle}>
          <Link
            href={application.website}
            tabIndex={0}
            className={styles.showcaseCardLink}
          >
            {application.title}
          </Link>
        </h4>
        {application.npm && (
          <Link
            href={application.npm}
            style={{ marginRight: '.4rem' }}
            tabIndex={1}
            className="header-npm-link"
          ></Link>
        )}
        {application.github && (
          <Link
            href={application.github}
            tabIndex={0}
            className="header-github-link"
          ></Link>
        )}
      </div>
      <p className={styles.showcaseCardBody}>{application.description}</p>
    </div>
    {application.tags && (
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={application.tags} />
      </ul>
    )}
  </li>
))

export default ShowcaseCard
