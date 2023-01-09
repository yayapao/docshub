const toolkitPrefix = 'programming-language/javascript/toolkits'
const handbookPrefix = 'programming-language/javascript/handbook'
const reactPrefix = 'programming-language/javascript/react'

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
    // {
    //   type: 'category',
    //   label: 'JavaScript Toolkits',
    //   collapsed: true,
    //   items: [`${toolkitPrefix}/zx`],
    // },
    {
      type: 'category',
      label: 'React Framework',
      collapsed: true,
      items: [
        `${reactPrefix}/concept`,
        `${reactPrefix}/handbook`,
        `${reactPrefix}/solution`,
        `${reactPrefix}/libs`,
        `${reactPrefix}/qa`,
      ],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const javascriptProgrammingSidebarConfig = {
  ...javascriptProgrammingSidebar,
}

module.exports = javascriptProgrammingSidebarConfig
