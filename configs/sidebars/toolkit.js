const nodejsPrefix = 'toolkit/nodejs-runtime'
const nodejsPackages = {
  npSiderBar: [
    {
      type: 'category',
      label: 'Node.js Runtime',
      collapsed: false,
      items: [
        `${nodejsPrefix}/zx`,
        `${nodejsPrefix}/pm2`,
        `${nodejsPrefix}/axios`,
        `${nodejsPrefix}/puppeteer`,
      ],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const toolkitSiderbarsConfig = {
  ...nodejsPackages,
}

module.exports = toolkitSiderbarsConfig
