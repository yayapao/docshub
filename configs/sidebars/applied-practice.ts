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
      label: 'Go',
      collapsed: true,
      items: genSiderItem(`${prefix}/go`, ['webapp']),
    },
  ],
}

export default appliedPracticeConfig
