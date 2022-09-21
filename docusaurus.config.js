// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// see: https://docusaurus.io/docs/api/docusaurus-config for details

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const navbarConfig = require('./configs/navbar/index')

const customFields = {
  githubUrl: 'https://github.com/YaYaPao',
}

// 顶栏公告信息
const announcementBar = {
  // id: 'support_us',
  // content:
  //   'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
  // backgroundColor: '#fafbfc',
  // textColor: '#091E42',
  // isCloseable: true,
}

/** @type {import('@docusaurus/types').ThemeConfig} */
const themeConfig = {
  colorMode: {
    respectPrefersColorScheme: true,
  },
  // announcementBar,
  navbar: navbarConfig,
  footer: {
    // style: 'dark',
    copyright: `Copyright © ${new Date().getFullYear()} 粤ICP备20070108号`,
  },
  // code block highlight
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
}

/** @type {import('@docusaurus/types').Config} */
const metaConfig = {
  title: 'Docshub',
  // main page slogan
  tagline: 'Nice to doc, nice to code!',
  organizationName: 'YaYaPao', // Usually your GitHub org/user name.
  projectName: 'docshub', // Usually your repo name.
  url: 'https://docs.7k7k.life/',
  baseUrl: '/',
  favicon: '/img/favicon.png',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...metaConfig,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    require.resolve('docusaurus-plugin-sass'),
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'zh'], // language codes
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./configs/sidebars/index.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All docshub posts',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig,
  customFields,
}

module.exports = { ...config }
