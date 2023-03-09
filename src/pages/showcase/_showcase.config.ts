import { Application, TagType, Tag } from '@site/src/types/showcase'
const imgPath = 'https://docs-1300606192.cos.ap-shanghai.myqcloud.com/showcase'
const imgPrefix = '/assets/showcase'
const fteProjects: Application[] = [
  {
    key: 'fte',
    title: 'FTE',
    description: 'Frontend trustworthy engineering!',
    preview: `${imgPrefix}/fte.jpg`,
    website: '/docs/project/fte/fte',
    isCore: true,
    tags: ['core'],
  },
  {
    key: 'wpm',
    title: 'wpm',
    description: 'Web performance measure!',
    preview: `${imgPrefix}/wpm.jpeg`,
    website: '/docs/project/wpm/wpm',
    tags: ['performance', 'design'],
  },
  {
    key: 'sentry',
    title: 'sentry',
    description: 'Focusing on error reporting!',
    preview: `${imgPrefix}/sentry.svg`,
    website: '/docs/project/sentry/sentry',
    tags: ['errors', 'performance'],
  },
]

const ftcProject: Application[] = [
  {
    key: 'ftc',
    title: 'FTC',
    description: 'Frontend toolkit chain!',
    preview: `${imgPrefix}/ftc.jpg`,
    website: '/docs/project/frontend-toolkit-chain/entry/ftc',
    isCore: true,
    tags: ['core'],
  },
  {
    key: 'joycra',
    title: 'joycra',
    description: `Enjoy Creating React App!`,
    preview: `${imgPrefix}/joycra.svg`,
    github: 'https://github.com/YaYaPao/joycra',
    website: '/docs/project/frontend-toolkit-chain/joycra',
    tags: ['design', 'React'],
  },
  {
    key: 'joyutils',
    title: 'joydev',
    description: `Aims to help developers cultivate good coding practices and style.`,
    preview: `${imgPrefix}/joyutils.jpg`,
    github: 'https://github.com/YaYaPao/joydev/tree/main/packages/joyutils',
    website: '/docs/project/frontend-toolkit-chain/joyutils',
    tags: ['personal'],
  },
  // {
  //   key: 'joylint',
  //   title: 'joylint',
  //   description: `Genki Dama OF Frontend's Lint tool chain!`,
  //   preview: `${imgPrefix}/joylint.png`,
  //   website: '/docs/project/frontend-toolkit-chain/joylint',
  //   tags: ['ESLint', 'Prettier'],
  // },
]

export const getRepos: () => Application[] = () => {
  return [
    {
      key: 'MyDevHandbook',
      title: 'MyDevHandbook',
      description: `Development's handbook of mine!`,
      preview: `/img/logo.png`,
      website: '/docs/repo/my-dev-handbook/docshub',
      tags: ['design'],
    },
    {
      key: 'wpmonit',
      title: 'wpmonit',
      description: 'Web performance measure SDK!',
      preview: `${imgPrefix}/wpmonit.jpg`,
      github: 'https://github.com/YaYaPao/wpmonit',
      npm: 'https://www.npmjs.com/package/wpmonit',
      website: '/docs/repo/wpmonit/readme',
      tags: ['opensource', 'performance'],
    },
    {
      key: 'reactErrorCatcher',
      title: 'React Error Catcher',
      description: 'Powerful error catcher in React!',
      preview: `${imgPrefix}/react-error-catcher.jpg`,
      github: 'https://github.com/YaYaPao/react-error-catcher',
      npm: 'https://www.npmjs.com/package/react-error-catcher',
      website: '/docs/repo/react-error-catcher/readme',
      tags: ['opensource', 'errors'],
    },
  ]
}

export const getProjects: () => {
  title: string
  projects: Application[]
}[] = () => {
  return [
    {
      title: 'FTE 🐼 Frontend Trustworthy Engineering',
      projects: fteProjects,
    },
    {
      title: 'FTC 🐙 Frontend Toolkit Chain',
      projects: ftcProject,
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
  React: {
    label: 'React',
    description: 'A JavaScript library for building user interfaces',
    color: '#61dafb',
  },
}
