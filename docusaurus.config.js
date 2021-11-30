// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// see: https://docusaurus.io/docs/api/docusaurus-config for details

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

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
  navbar: {
    title: 'Docshub',
    hideOnScroll: true,
    logo: {
      alt: 'Docs Hub',
      src: 'img/logo.svg',
    },
    items: [
      { to: '/blog', label: 'Blog', position: 'left' },
      {
        label: 'DevOps',
        position: 'left',
        items: [
          {
            label: 'Server',
            to: '/docs/cloudServer/',
            // 设置高亮
            activeBaseRegex: '/docs/server',
          },
          {
            label: 'Browser',
            to: '/docs/browser/corevitals',
            activeBaseRegex: '/docs/browser',
          },
          {
            label: 'Library',
            to: '/docs/library/nodejs',
            activeBaseRegex: '/docs/library',
          },
        ],
      },
      {
        label: 'Language',
        position: 'left',
        items: [
          {
            label: 'JavaScript',
            to: '/docs/langs/javascript/concept',
            activeBaseRegex: '/docs/langs/javascript',
          },
          {
            label: 'TypeScript',
            to: '/docs/langs/typescript/concept',
            activeBaseRegex: '/docs/langs/typescript',
          },
          {
            label: 'Node.js',
            to: '/docs/langs/nodejs/concept',
            activeBaseRegex: '/docs/langs/nodejs',
          },
          {
            label: 'Python3',
            to: '/docs/langs/python/concept',
            activeBaseRegex: '/docs/langs/python',
          },
          {
            label: 'Golang',
            to: '/docs/langs/go/concept',
            activeBaseRegex: '/docs/langs/go',
          },
          {
            label: 'HTML5',
            to: '/docs/langs/html5/concept',
            activeBaseRegex: '/docs/langs/html5',
          },
          {
            label: 'CSS3',
            to: '/docs/langs/css3/concept',
            activeBaseRegex: '/docs/langs/html5',
          },
        ],
      },
      {
        className: 'header-repo-link',
        position: 'right',
        to: 'repo',
        'aria-label': 'npm repository',
      },
      {
        href: 'https://github.com/Y-lonelY',
        className: 'header-github-link',
        position: 'right',
        'aria-label': 'GitHub repository',
      },
    ],
  },
  footer: {
    style: 'dark',
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
  organizationName: 'Y-lonelY', // Usually your GitHub org/user name.
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
    require.resolve('@docusaurus/plugin-ideal-image'),
    require.resolve('docusaurus-plugin-sass'),
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig,
}

module.exports = { ...config }
