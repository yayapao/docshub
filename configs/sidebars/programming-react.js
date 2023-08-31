const reactPrefix = 'programming-language/react/react'
const rnPrefix = 'programming-language/react/react-native'

const reactProgrammingSidebar = {
  reactProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/react/entry',
    },
    {
      type: 'category',
      label: 'React',
      collapsed: true,
      items: [
        `${reactPrefix}/secret`,
        `${reactPrefix}/concept`,
        `${reactPrefix}/handbook`,
        `${reactPrefix}/solution`,
        `${reactPrefix}/libs`,
        `${reactPrefix}/qa`,
      ],
    },
    {
      type: 'category',
      label: 'React Native',
      collapsed: true,
      items: [`${rnPrefix}/application`],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const reactProgrammingSidebarConfig = {
  ...reactProgrammingSidebar,
}

module.exports = reactProgrammingSidebarConfig
