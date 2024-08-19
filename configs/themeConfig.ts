import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'

const navbarConfig: Config['themeConfig'] = {
  title: 'Docshub',
  hideOnScroll: true,
  logo: {
    alt: 'Docs Hub',
    src: 'img/logo.svg',
  },
  items: [
    { to: '/blog', label: '📚', position: 'left' },
    {
      label: 'Foundation',
      position: 'left',
      items: [
        {
          label: 'cloudserver',
          to: '/docs/foundation/cloudserver/otel',
          // 设置高亮
          activeBaseRegex: '/docs/foundation',
        },
        {
          label: 'Applied Practice',
          to: '/docs/applied-practice/android/handbook',
          // 设置高亮
          activeBaseRegex: '/docs/applied-practice',
        },
      ],
    },

    {
      label: 'Progarmming Language',
      position: 'left',
      items: [
        {
          label: 'Before development',
          to: '/docs/before-dev/frontend-handbook/entry',
          activeBaseRegex: '/docs/before-dev',
        },
        {
          label: 'JavaScript',
          to: '/docs/programming-language/js/entry',
          activeBaseRegex: '/docs/programming-language/js/entry',
        },
        {
          label: 'React',
          to: '/docs/programming-language/react/entry',
          activeBaseRegex: '/docs/programming-language/react/entry',
        },
        {
          label: 'Node.js',
          to: '/docs/programming-language/nodejs/entry',
          activeBaseRegex: '/docs/programming-language/nodejs',
        },
        {
          label: 'Go',
          to: '/docs/programming-language/go/entry',
          activeBaseRegex: '/docs/programming-language/go',
        },
        {
          label: 'HTML5',
          to: '/docs/programming-language/html5/entry',
          activeBaseRegex: 'html5/*',
        },
        {
          label: 'Python',
          to: '/docs/programming-language/py/entry',
          activeBaseRegex: 'py/*',
        },
      ],
    },
    {
      className: 'header-showcase-link',
      position: 'right',
      to: 'showcase',
      'aria-label': 'showcase',
    },
    {
      className: 'header-storybook-link',
      position: 'right',
      'aria-label': 'storybook',
      href: 'https://doc.joyjoy.cc/story',
    },
    {
      href: 'https://github.com/YaYaPao',
      className: 'header-github-link',
      position: 'right',
      'aria-label': 'GitHub repository',
    },
  ],
}

export const themeConfigs: Config['themeConfig'] = {
  // Replace with your project's social card
  image: 'img/docusaurus-social-card.jpg',
  navbar: navbarConfig,
  footer: {
    copyright: `Copyright © ${new Date().getFullYear()} 粤ICP备20070108号`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
  docs: {
    sidebar: {
      hideable: true,
    },
  },
  typesense: {
    typesenseCollectionName: 'docshub',
    typesenseServerConfig: {
      nodes: [
        {
          host: 'doc.joyjoy.cc',
          port: 443,
          protocol: 'https',
          path: '/typesense',
        },
      ],
      apiKey: 'joyjoy',
    },
    typesenseSearchParameters: {},
    contextualSearch: true,
  },
} satisfies Preset.ThemeConfig
