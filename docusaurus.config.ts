import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themeConfigs } from './configs/themeConfig'

const metaConfig: Config = {
  title: 'Docshub',
  // main page slogan
  tagline: 'Nice to doc, nice to code!',
  organizationName: 'YaYaPao', // Usually your GitHub org/user name.
  projectName: 'docshub', // Usually your repo name.
  url: 'https://doc.joyjoy.cc/',
  baseUrl: '/',
  favicon: '/img/favicon.png',
}

const config: Config = {
  ...metaConfig,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      'docusaurus-lunr-search',
      {
        languages: ['en', 'zh'], // language codes
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All docshub posts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: themeConfigs,
  customFields: {
    githubUrl: 'https://github.com/yayapao',
  },
}

export default config
