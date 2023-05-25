const frontendPrefix = 'before-dev/'
const cloudPrefix = 'before-dev/cloud-infrastructure'

const beforeDevelopmentSidebar = {
  frontendHandbookSidebar: [
    {
      type: 'doc',
      id: 'before-dev/frontend-handbook/entry',
    },
    {
      type: 'category',
      label: 'Cloud Infrastructure',
      collapsed: true,
      items: [`${cloudPrefix}/vercel/entry`],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const beforeDevelopmentSidebarConfig = {
  ...beforeDevelopmentSidebar,
}

module.exports = beforeDevelopmentSidebarConfig
