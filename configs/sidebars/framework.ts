import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const reactConfig: SidebarsConfig = {
  react: [
    {
      type: 'category',
      label: 'React',
      collapsed: false,
      items: genSiderItem('framework/react', ['qs', 'source-code']),
    },
  ],
}

const nextjsConfig: SidebarsConfig = {
  nextjs: [
    {
      type: 'category',
      label: 'Next.js',
      collapsed: false,
      items: genSiderItem('framework/nextjs', ['qs']),
    },
  ],
}

export { reactConfig, nextjsConfig }
