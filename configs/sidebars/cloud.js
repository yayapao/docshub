const cloundServerPrefix = 'cloud/server'

const cloudSidebar = {
  golangProgrammingSidbar: [
    {
      type: 'category',
      label: 'Cloud Server',
      collapsed: true,
      items: [`${cloundServerPrefix}/vercel`],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const cloudSidebarConfig = {
  ...cloudSidebar,
}

module.exports = cloudSidebarConfig
