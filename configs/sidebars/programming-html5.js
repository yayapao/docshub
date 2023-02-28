const { genSiderItem } = require('../utils')
const handbookPrefix = 'programming-language/html5/handbook'
const browserPrefix = 'programming-language/html5/browser'

const HTML5ProgrammingSidebar = {
  HTML5ProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/html5/entry',
    },
    {
      type: 'category',
      label: 'Handbook',
      collapsed: true,
      items: genSiderItem(handbookPrefix, [
        'mechanism',
        'element',
        'css',
        'faq',
      ]),
    },
    {
      type: 'category',
      label: 'Browser',
      collapsed: true,
      items: genSiderItem(browserPrefix, ['feature', 'cache']),
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const HTML5ProgrammingSidebarConfig = {
  ...HTML5ProgrammingSidebar,
}

module.exports = HTML5ProgrammingSidebarConfig
