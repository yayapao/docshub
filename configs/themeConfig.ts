import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'

export const themeConfigs: Config['themeConfig'] = {
  // Replace with your project's social card
  image: 'img/docusaurus-social-card.jpg',
  navbar: {
    title: 'Docshub',
    hideOnScroll: true,
    logo: {
      alt: 'Docs Hub',
      src: 'img/logo.svg',
    },
    items: [
      { to: '/blog', label: '📚', position: 'left' },
      {
        label: '🧿🧿',
        position: 'left',
        items: [
          {
            label: 'Server',
            to: '/docs/server/cloudServer',
            // 设置高亮
            activeBaseRegex: '/docs/server',
          },
          {
            label: 'Interview',
            to: '/docs/interview/js',
            activeBaseRegex: '/docs/interview',
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
            to: '/docs/programming-language/javascript/entry',
            activeBaseRegex: '/docs/programming-language/javascript/entry',
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
            label: 'Golang',
            to: '/docs/programming-language/golang/entry',
            activeBaseRegex: '/docs/programming-language/golang',
          },
          {
            label: 'HTML5',
            to: '/docs/programming-language/html5/entry',
            activeBaseRegex: 'html5/*',
          },
          {
            label: 'Python3',
            to: '/docs/langs/python/concept',
            activeBaseRegex: '/docs/langs/python',
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
  },
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
} satisfies Preset.ThemeConfig
