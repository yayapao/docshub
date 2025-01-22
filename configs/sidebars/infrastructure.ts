import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const prefix = `infrastructure`

const infrastructureConfig: SidebarsConfig = {
  infrastructureSidebar: [
    {
      type: 'category',
      label: 'Infrastructure',
      collapsed: true,
      items: genSiderItem(`${prefix}`, [
        'faq',
        'overview',
        'linux',
        'config',
        'nginx',
        'docker',
      ]),
    },
  ],
}

export default infrastructureConfig
