const toolkitPrefix = 'programming-language/nodejs/toolkits'
const handbookPrefix = 'programming-language/nodejs/handbook'

const nodejsProgrammingSidebar = {
  nodejsProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/nodejs/entry',
    },
    {
      type: 'category',
      label: 'Node.js Handbook',
      collapsed: true,
      items: [`${handbookPrefix}/practice`, `${handbookPrefix}/execution`],
    },
    {
      type: 'category',
      label: 'Node.js Toolkits',
      collapsed: true,
      items: [
        `${toolkitPrefix}/zx`,
        `${toolkitPrefix}/pm2`,
        `${toolkitPrefix}/axios`,
        `${toolkitPrefix}/puppeteer`,
      ],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const nodejsProgrammingSidebarConfig = {
  ...nodejsProgrammingSidebar,
}

module.exports = nodejsProgrammingSidebarConfig
