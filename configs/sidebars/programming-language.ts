import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

// nodejs
const nodejsToolkitPrefix = 'programming-language/nodejs/toolkits'
const nodejsHandbookPrefix = 'programming-language/nodejs/handbook'
// go
const goToolkitPrefix = 'programming-language/golang/toolkits'
const goHandbookPrefix = 'programming-language/golang/handbook'
// html5
const htmlHandbookPrefix = 'programming-language/html5/handbook'
const htmlBrowserPrefix = 'programming-language/html5/browser'
// js
const jsHandbookPrefix = 'programming-language/javascript/handbook'
const tsPrefix = 'programming-language/javascript/typescript'
// react
const reactPrefix = 'programming-language/react/react'

const programmingLanguageConfig: SidebarsConfig = {
  nodejsProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/nodejs/entry',
    },
    {
      type: 'category',
      label: 'Node.js Handbook',
      collapsed: true,
      items: genSiderItem(nodejsHandbookPrefix, ['usage', 'execution']),
    },
    {
      type: 'category',
      label: 'Node.js Toolkits',
      collapsed: true,
      items: genSiderItem(nodejsToolkitPrefix, ['monorepo', 'common', 'npm']),
    },
  ],
  golangProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/golang/entry',
    },
    {
      type: 'category',
      label: 'Go Handbook',
      collapsed: true,
      items: genSiderItem(goHandbookPrefix, ['grammar']),
    },
    {
      type: 'category',
      label: 'Go Toolkits',
      collapsed: true,
      items: genSiderItem(goToolkitPrefix, ['gorm']),
    },
  ],
  HTML5ProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/html5/entry',
    },
    {
      type: 'category',
      label: 'Handbook',
      collapsed: true,
      items: genSiderItem(htmlHandbookPrefix, [
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
      items: genSiderItem(htmlBrowserPrefix, ['feature', 'cache']),
    },
  ],
  javascriptProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/javascript/entry',
    },
    {
      type: 'category',
      label: 'JavaScript Handbook',
      collapsed: true,
      items: genSiderItem(jsHandbookPrefix, ['grammar', 'closure', 'devskill']),
    },
    {
      type: 'category',
      label: 'TypeScript',
      collapsed: true,
      items: genSiderItem(tsPrefix, ['handbook', 'tsconfig']),
    },
  ],
  reactProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/react/entry',
    },
    {
      type: 'category',
      label: 'React',
      collapsed: true,
      items: genSiderItem(reactPrefix, [
        'secret',
        'concept',
        'handbook',
        'solution',
        'libs',
        'qa',
      ]),
    },
  ],
}

export default programmingLanguageConfig
