const toolkitPrefix = 'programming-language/golang/toolkits'
const handbookPrefix = 'programming-language/golang/handbook'

const golangProgrammingSidebar = {
  golangProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/golang/entry',
    },
    {
      type: 'category',
      label: 'Go Handbook',
      collapsed: true,
      items: [`${handbookPrefix}/grammar`],
    },
    {
      type: 'category',
      label: 'Go Toolkits',
      collapsed: true,
      items: [`${toolkitPrefix}/gorm`],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const golangProgrammingSidebarConfig = {
  ...golangProgrammingSidebar,
}

module.exports = golangProgrammingSidebarConfig
