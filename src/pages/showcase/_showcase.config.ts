import { Application, TagType, Tag } from '@site/src/types/showcase'

export const getRepos: () => Application[] = () => {
  return [
    {
      key: 'MyDevHandbook',
      title: 'MyDevHandbook',
      description: `Development's handbook of mine!`,
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase/wpmonit.jpg',
      website: '/docs/repo/my-dev-handbook/docshub',
      tags: ['design'],
    },
    {
      key: 'wpmonit',
      title: 'wpmonit',
      description: 'Web performance measure SDK!',
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase/wpmonit.jpg',
      github: 'https://github.com/Y-lonelY/wpmonit',
      npm: 'https://www.npmjs.com/package/wpmonit',
      website: '/docs/repo/wpmonit/readme',
      tags: ['opensource', 'performance'],
    },
    {
      key: 'reactErrorCatcher',
      title: 'React Error Catcher',
      description: 'Powerful error catcher in React!',
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase/react-error-catcher.jpg',
      github: 'https://github.com/Y-lonelY/react-error-catcher',
      npm: 'https://www.npmjs.com/package/react-error-catcher',
      website: '/docs/repo/react-error-catcher/readme',
      tags: ['opensource', 'errors'],
    },
    {
      key: 'joylint',
      title: 'joylint',
      description: `Genki Dama OF Frontend's Lint tool chain!`,
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase/lintdd.jpg',
      npm: 'https://www.npmjs.com/package/joylint',
      website: '/docs/repo/joylint/readme',
      tags: ['ESLint', 'Prettier'],
    },
  ]
}

export const getProjects: () => Application[] = () => {
  return [
    {
      key: 'fte',
      title: 'FTE',
      description: 'Frontend trustworthy engineering!',
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase/fte.jpg',
      website: '/docs/project/fte/fte',
      isCore: true,
      tags: ['core'],
    },
    {
      key: 'wpm',
      title: 'wpm',
      description: 'Web performance measure!',
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase/wpm.jpeg',
      website: '/docs/project/wpm/wpm',
      tags: ['performance', 'design'],
    },
    {
      key: 'sentry',
      title: 'sentry',
      description: 'Focusing on error reporting!',
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase/sentry.jpg',
      website: '/docs/project/sentry/sentry',
      tags: ['errors', 'performance'],
    },
  ]
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: 'Favorite',
    description: 'My favorite showcase that you must absolutely check-out!',
    color: '#e9669e',
  },

  core: {
    label: 'Core',
    description: 'Cores of the techniques!',
    color: '#f30',
  },

  // For open-source sites, a link to the source code is required
  opensource: {
    label: 'Open-Source',
    description: 'Can be useful for inspiration!',
    color: '#555cf3',
  },

  product: {
    label: 'Product',
    description: 'Associated to a product, whether it is commercial!',
    color: '#dfd545',
  },

  design: {
    label: 'Design',
    description: 'Wonderful design with minds!',
    color: '#a44fb7',
  },

  personal: {
    label: 'Personal',
    description: 'Personal websites, blogs and digital gardens.',
    color: '#14cfc3',
  },

  performance: {
    label: 'Performance',
    description: 'Runtime performance',
    color: '#39ca30',
  },

  errors: {
    label: 'Errors',
    description: 'Runtime errors',
    color: '#fc988c',
  },
  ESLint: {
    label: 'ESLint',
    description: 'ESLint',
    color: '#f30',
  },
  Prettier: {
    label: 'Prettier',
    description: 'Prettier',
    color: '#0f59aa',
  },
}
