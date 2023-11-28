import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const prefix = `foundation`

const foundationConfig: SidebarsConfig = {
  cloudServerSidebar: [
    {
      type: 'category',
      label: 'CloudServer',
      collapsed: true,
      items: genSiderItem(`${prefix}/cloudserver`, ['otel', 'docker']),
    },
  ],
}

export default foundationConfig
