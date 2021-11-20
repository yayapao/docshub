// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').ThemeConfig} */
const themeConfig = {
  navbar: {
    title: 'UPDoc',
    logo: {
      alt: 'My Site Logo',
      src: 'img/logo.svg',
    },
    items: [
      { to: '/blog', label: 'Blog', position: 'left' },
      {
        label: 'Runtime',
        position: 'left',
        items: [
          {
            label: 'Server',
            to: '/docs/cloudServer/',
          },
          {
            label: 'Browser',
            to: '/docs/browser/corevitals',
          },
          {
            label: 'Library',
            to: '/docs/library/nodejs',
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
          },
          {
            label: 'TypeScript',
            to: '/docs/langs/typescript/concept',
          },
          {
            label: 'Node.js',
            to: '/docs/langs/nodejs/concept',
          },
          {
            label: 'Python3',
            to: '/docs/langs/python/concept',
          },
          {
            label: 'HTML5',
            to: '/docs/langs/html5/concept',
          },
          {
            label: 'CSS3',
            to: '/docs/langs/css3/concept',
          },
        ],
      },
      {
        href: 'https://github.com/Y-lonelY',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'dark',
    copyright: `Copyright © ${new Date().getFullYear()} 粤ICP备20070108号`,
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 控制首页和 title
  title: 'UP!Doooc',
  tagline: 'Nice to doc, nice to code!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Y-lonelY', // Usually your GitHub org/user name.
  projectName: 'updoc', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
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
