import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

// nodejs
const nodejsToolkitPrefix = 'programming-language/nodejs/toolkits'
const nodejsHandbookPrefix = 'programming-language/nodejs/handbook'
// go
const goToolkitPrefix = 'programming-language/go/toolkits'
const goHandbookPrefix = 'programming-language/go/handbook'
const goAppPrefix = 'programming-language/go/app'
// html5
const htmlHandbookPrefix = 'programming-language/html5/handbook'
const htmlBrowserPrefix = 'programming-language/html5/browser'
// js
const jsHandbookPrefix = 'programming-language/js/handbook'
const tsPrefix = 'programming-language/js/typescript'
// react
const reactPrefix = 'programming-language/react/react'
const rnPrefix = 'programming-language/react/react-native'
// python
const pyHandbookPrefix = 'programming-language/py/handbook'

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
      id: 'programming-language/go/entry',
    },
    {
      type: 'category',
      label: 'Handbook',
      collapsed: true,
      items: genSiderItem(goHandbookPrefix, ['grammar', 'tips']),
    },
    {
      type: 'category',
      label: 'Toolkits',
      collapsed: true,
      items: genSiderItem(goToolkitPrefix, ['gin', 'gorm']),
    },
    {
      type: 'category',
      label: 'Application',
      collapsed: true,
      items: genSiderItem(goAppPrefix, ['before-start', 'applied']),
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
      id: 'programming-language/js/entry',
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
      items: genSiderItem(reactPrefix, ['concept', 'handbook', 'qa']),
    },
    {
      type: 'category',
      label: 'ReactNative',
      collapsed: true,
      items: genSiderItem(rnPrefix, ['app', 'handbook']),
    },
  ],
  pythonProgrammingSidbar: [
    {
      type: 'doc',
      id: 'programming-language/py/entry',
    },
    {
      type: 'category',
      label: 'Handbook',
      collapsed: true,
      items: genSiderItem(pyHandbookPrefix, ['concept', 'grammar']),
    },
  ],
}

export default programmingLanguageConfig
