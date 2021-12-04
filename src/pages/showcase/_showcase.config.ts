import { Application, TagType, Tag } from '@site/src/types/showcase'

export const getRepos: () => Application[] = () => {
  return [
    {
      key: 'wpmonit',
      title: 'wpmonit',
      description: 'Web performance measure SDK!',
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/repo/wpmonit.jpg',
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
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/repo/react-error-catcher.jpg',
      github: 'https://github.com/Y-lonelY/react-error-catcher',
      npm: 'https://www.npmjs.com/package/react-error-catcher',
      website: '/docs/repo/react-error-catcher/readme',
      tags: ['opensource', 'errors'],
    },
  ]
}

export const getProjects: () => Application[] = () => {
  return [
    {
      key: 'wpm',
      title: 'wpm',
      description: 'Web performance measure!',
      preview:
        'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/repo/wpmonit.jpg',
      website: '/docs/repo/wpmonit/readme',
      tags: ['opensource', 'performance', 'design'],
    },
  ]
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: 'Favorite',
    description: 'My favorite showcase that you must absolutely check-out!',
    color: '#e9669e',
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
}
