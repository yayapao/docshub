const frontendPrefix = 'before-dev/'
const cloudPrefix = 'before-dev/cloud-infrastructure'
const dataPrefix = 'before-dev/data-services'

const beforeDevelopmentSidebar = {
  frontendHandbookSidebar: [
    {
      type: 'doc',
      id: 'before-dev/frontend-handbook/entry',
    },
    {
      type: 'category',
      label: 'Git & GitHub',
      collapsed: true,
      items: [
        `${frontendPrefix}/git-github/git`,
        `${frontendPrefix}/git-github/github`,
      ],
    },
    {
      type: 'category',
      label: 'Cloud Infrastructure',
      collapsed: true,
      items: [`${cloudPrefix}/vercel/entry`],
    },
    {
      type: 'category',
      label: 'Data Services',
      collapsed: true,
      items: [`${dataPrefix}/entry`],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const beforeDevelopmentSidebarConfig = {
  ...beforeDevelopmentSidebar,
}

module.exports = beforeDevelopmentSidebarConfig
