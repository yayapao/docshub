import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const developmentPrefix = 'development'

const developmentSiderbarsConfig: SidebarsConfig = {
  gitRelated: [
    {
      type: 'category',
      label: 'Git Related',
      collapsed: false,
      items: genSiderItem(developmentPrefix + '/git-related', [
        'git',
        'github',
      ]),
    },
  ],
  linuxRelated: [
    {
      type: 'category',
      label: 'Linux Related',
      collapsed: false,
      items: genSiderItem(developmentPrefix + '/linux-related', [
        'linux',
        'command',
      ]),
    },
  ],
  selfHosted: [
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
  ],
}

export default developmentSiderbarsConfig
