const nodejsPrefix = 'toolkit/nodejs-runtime'
const nodejsPackages = {
  npSiderBar: [
    {
      type: 'category',
      label: 'Node.js Packages',
      collapsed: false,
      items: [
        `${nodejsPrefix}/zx`,
        `${nodejsPrefix}/pm2`,
        `${nodejsPrefix}/axios`,
      ],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const toolkitSiderbarsConfig = {
  ...nodejsPackages,
}

module.exports = toolkitSiderbarsConfig
