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
      label: '数据服务',
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
