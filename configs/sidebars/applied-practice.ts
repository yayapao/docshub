import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const prefix = `applied-practice`

const appliedPracticeConfig: SidebarsConfig = {
  appliedPracticeSidebar: [
    {
      type: 'category',
      label: 'Android',
      collapsed: true,
      items: genSiderItem(`${prefix}/android`, ['handbook']),
    },
    {
      type: 'category',
      label: 'WX Mini Program',
      collapsed: true,
      items: genSiderItem(`${prefix}/wx`, ['game']),
    },
  ],
}

export default appliedPracticeConfig
