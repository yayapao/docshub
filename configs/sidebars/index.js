/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const projectSiderbarsConfig = require('./projects')
// const toolkitSiderbarsConfig = require('./configs/sidebars/toolkit')
const nodejsProgrammingSidebarConfig = require('./programming-nodejs')
const goProgrammingSidebarConfig = require('./programming-go')
const javascriptProgrammingSidebarConfig = require('./programming-javascript')
const reactProgrammingSidebarConfig = require('./programming-react')
const htmlProgrammingSiderbarConfig = require('./programming-html5')
const beforeDevelopmentSidebarConfig = require('./before-development')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const repoSiderbarsConfig = {
  handbookSiderBar: [
    {
      type: 'category',
      label: 'hanbooks',
      collapsed: false,
      items: [
        'repo/my-dev-handbook/docshub',
        'repo/my-dev-handbook/annualRings',
      ],
    },
  ],
  wpmonitSiderBar: [
    {
      type: 'category',
      label: 'wpmonit',
      collapsed: false,
      items: ['repo/wpmonit/readme', 'repo/wpmonit/metrics'],
    },
  ],
  reactErrorCatcher: [
    {
      type: 'category',
      label: 'React Error Catcher',
      collapsed: false,
      items: [
        'repo/react-error-catcher/readme',
        'repo/react-error-catcher/design',
      ],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  serverSiderbar: [
    {
      type: 'category',
      label: 'Site Reliability',
      collapsed: true,
      items: [
        'server/cloudServer',
        'server/linux',
        'server/nginx',
        'server/docker',
      ],
    },
  ],
  interviewSiderbar: [
    {
      type: 'category',
      label: 'Frontend',
      collapsed: true,
      items: ['interview/js', 'interview/frames'],
    },
  ],
  librarySiderbar: [
    {
      type: 'category',
      label: 'Library',
      collapsed: true,
      items: ['library/python'],
    },
    {
      type: 'category',
      label: 'Vue',
      collapsed: true,
      items: ['library/vue/concept', 'library/vue/libs'],
    },
    {
      type: 'category',
      label: 'NestJs',
      collapsed: true,
      items: ['library/nestjs/concept', 'library/nestjs/qa'],
    },
    {
      type: 'category',
      label: 'Webpack',
      collapsed: true,
      items: [
        'library/webpack/concept',
        'library/webpack/loader',
        'library/webpack/plugin',
        'library/webpack/optimization',
      ],
    },
  ],
  languageSiderBar: [
    {
      type: 'category',
      label: 'Python3',
      collapsed: true,
      items: ['langs/python/concept', 'langs/python/grammar'],
    },
  ],
  // programming language
  ...nodejsProgrammingSidebarConfig,
  ...goProgrammingSidebarConfig,
  ...javascriptProgrammingSidebarConfig,
  ...reactProgrammingSidebarConfig,
  ...htmlProgrammingSiderbarConfig,
  ...repoSiderbarsConfig,
  ...projectSiderbarsConfig,
  ...beforeDevelopmentSidebarConfig,
}

module.exports = sidebars
