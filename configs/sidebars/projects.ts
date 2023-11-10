import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const ftcPrefix = 'project/frontend-toolkit-chain/'

const projectSiderbarsConfig: SidebarsConfig = {
  fteSiderBar: [
    {
      type: 'category',
      label: 'FTE',
      collapsed: false,
      items: genSiderItem('project/fte', ['fte', 'judgement']),
    },
  ],
  wpmSiderBar: [
    {
      type: 'category',
      label: 'WPM',
      collapsed: false,
      items: genSiderItem('project/wpm', ['wpm', 'metrics']),
    },
  ],
  sentrySiderBar: [
    {
      type: 'category',
      label: 'Sentry',
      collapsed: false,
      items: genSiderItem('project/sentry', [
        'sentry',
        'structure',
        'self_hosted',
        'development',
        'sourcecode',
        'troubleshooting',
      ]),
    },
    {
      type: 'category',
      label: 'Snuba',
      collapsed: true,
      items: genSiderItem('project/sentry/snuba', ['entry']),
    },
    {
      type: 'category',
      label: 'Ecosystem',
      collapsed: true,
      items: genSiderItem('project/sentry', [
        'discussion',
        'features',
        'observability',
      ]),
    },
  ],
  ftcSiderBar: [
    {
      type: 'category',
      label: 'FTC',
      collapsed: false,
      items: genSiderItem('project/frontend-toolkit-chain/entry', [
        'ftc',
        'faq',
      ]),
    },
  ],
  joycraSiderBar: [
    {
      type: 'category',
      label: 'joycra',
      collapsed: false,
      items: [
        `${ftcPrefix}joycra/readme`,
        {
          type: 'category',
          label: 'joycra-scripts',
          items: genSiderItem(
            'project/frontend-toolkit-chain/joycra/joycra-scripts',
            ['readme', 'design', 'highlights']
          ),
        },
      ],
    },
  ],
  joydev: [
    {
      type: 'category',
      label: '🔥Joyutils',
      collapsed: false,
      items: genSiderItem('project/frontend-toolkit-chain/joyutils', [
        'readme',
        'functions',
      ]),
    },
    {
      type: 'category',
      label: '⭐️Joylint',
      collapsed: false,
      items: genSiderItem('project/frontend-toolkit-chain/joylint', [
        'readme',
        'eslint',
        'husky',
      ]),
    },
  ],
}

export default projectSiderbarsConfig
