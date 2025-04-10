import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'
import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js'

const developmentPrefix = 'development'

const beforeConfig: SidebarItemConfig[] = [
  {
    type: 'doc',
    id: 'development/faq',
  },
  {
    type: 'doc',
    id: 'development/frontend-guide',
  },
  {
    type: 'category',
    label: 'Git Related',
    collapsed: false,
    items: genSiderItem(developmentPrefix + '/git-related', ['git', 'github']),
  },
  {
    type: 'category',
    label: 'Linux Related',
    collapsed: false,
    items: genSiderItem(developmentPrefix + '/linux-related', [
      'linux',
      'command',
    ]),
  },
  {
    type: 'category',
    label: 'Self-Hosted',
    collapsed: false,
    items: genSiderItem(developmentPrefix + '/self-hosted', [
      'vercel',
      'config',
      'docker',
      'nginx',
    ]),
  },
]

const developmentSiderbarsConfig: SidebarsConfig = {
  beforeDev: beforeConfig,
}

export { developmentSiderbarsConfig }
