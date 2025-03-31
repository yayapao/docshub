import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import { genSiderItem } from './utils'

const uiLibraryPrefix = 'ui-library'

const uiLibrarySiderbarsConfig: SidebarsConfig = {
  shadcn: [
    {
      type: 'category',
      label: 'UI Library',
      collapsed: false,
      items: genSiderItem(uiLibraryPrefix, ['shadcn', 'echarts', 'storybook']),
    },
  ],
}

export default uiLibrarySiderbarsConfig
