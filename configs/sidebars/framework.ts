import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const frameworkPrefix = 'framework/react'

const reactConfig: SidebarsConfig = {
  react: [
    {
      type: 'category',
      label: 'React',
      collapsed: false,
      items: genSiderItem(frameworkPrefix, ['qs', 'source-code']),
    },
  ],
}

export { reactConfig }
