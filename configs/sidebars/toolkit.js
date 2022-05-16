const npmPrefix = 'toolkit/node-packages'
const nodejsPackages = {
  npSiderBar: [
    {
      type: 'category',
      label: 'Node.js Packages',
      collapsed: false,
      items: [`${npmPrefix}/zx`, `${npmPrefix}/axios`],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const toolkitSiderbarsConfig = {
  ...nodejsPackages,
}

module.exports = toolkitSiderbarsConfig
