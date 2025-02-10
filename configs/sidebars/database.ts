import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const prefix = `database`

const databaseConfig: SidebarsConfig = {
  databaseSidebar: [
    {
      type: 'category',
      label: 'Database',
      collapsed: true,
      items: genSiderItem(`${prefix}`, [
        'faq',
        'mysql',
        'redis',
        'clickhouse',
        'kafka',
      ]),
    },
  ],
}

export default databaseConfig
