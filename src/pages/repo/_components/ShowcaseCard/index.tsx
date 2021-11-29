/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from 'react'
import clsx from 'clsx'
// 通过 @theme/IdealImage 会产生 bug
import Image from '@docusaurus/plugin-ideal-image/src/theme/IdealImage'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'
import { User, Tag } from '../../../../types/users'

interface Props extends Tag {
  id: string
}

const ShowcaseCard = memo(({ user }: { user: User }) => (
  <li key={user.title} className="card shadow--md">
    <div className={clsx('card__image', styles.showcaseCardImage)}>
      <Image img={user.preview} alt={user.title} />
    </div>
    <div className="card__body">
      <div className={clsx(styles.showcaseCardHeader)}>
        <h4 className={styles.showcaseCardTitle}>
          <Link
            href={user.website}
            tabIndex={0}
            className={styles.showcaseCardLink}
          >
            {user.title}
          </Link>
        </h4>
        {user.github && (
          <Link
            href={user.github}
            tabIndex={0}
            className="header-github-link"
          ></Link>
        )}
      </div>
      <p className={styles.showcaseCardBody}>{user.description}</p>
    </div>
  </li>
))

export default ShowcaseCard
