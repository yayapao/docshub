const toolkitPrefix = 'programming-language/javascript/toolkits'
const handbookPrefix = 'programming-language/javascript/handbook'
const tsPrefix = 'programming-language/javascript/typescript'

const javascriptProgrammingSidebar = {
  javascriptProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/javascript/entry',
    },
    {
      type: 'category',
      label: 'JavaScript Handbook',
      collapsed: true,
      items: [
        `${handbookPrefix}/grammar`,
        `${handbookPrefix}/closure`,
        `${handbookPrefix}/devskill`,
      ],
    },
    {
      type: 'category',
      label: 'TypeScript',
      collapsed: true,
      items: [`${tsPrefix}/handbook`, `${tsPrefix}/tsconfig`],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const javascriptProgrammingSidebarConfig = {
  ...javascriptProgrammingSidebar,
}

module.exports = javascriptProgrammingSidebarConfig
