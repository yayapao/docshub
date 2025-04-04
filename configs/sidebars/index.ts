import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
import programmingLanguageConfig from './programming-language'
import projectSiderbarsConfig from './projects'
import { genSiderItem } from './utils'
import appliedPracticeConfig from './applied-practice'
import infrastructureConfig from './infrastructure'
import databaseConfig from './database'
import uiLibrarySiderbarsConfig from './ui-library'
import { reactConfig as reactFrameworkConfig } from './framework'

const sidebarConfig: SidebarsConfig = {
  interviewSiderbar: [
    {
      type: 'category',
      label: 'Frontend',
      collapsed: true,
      items: ['interview/js', 'interview/frames'],
    },
  ],
  librarySiderbar: [
    {
      type: 'category',
      label: 'Vue',
      collapsed: true,
      items: ['library/vue/concept', 'library/vue/libs'],
    },
    {
      type: 'category',
      label: 'NestJs',
      collapsed: true,
      items: ['library/nestjs/concept', 'library/nestjs/qa'],
    },
    {
      type: 'category',
      label: 'Webpack',
      collapsed: true,
      items: [
        'library/webpack/concept',
        'library/webpack/loader',
        'library/webpack/plugin',
        'library/webpack/optimization',
      ],
    },
  ],
  frontendHandbookSidebar: [
    {
      type: 'doc',
      id: 'before-dev/frontend-handbook/entry',
    },
    {
      type: 'category',
      label: 'Git & GitHub',
      collapsed: true,
      items: genSiderItem('before-dev/git-github', ['git', 'github']),
    },
    {
      type: 'category',
      label: 'Cloud Infrastructure',
      collapsed: true,
      items: genSiderItem('before-dev/cloud-infrastructure', ['vercel/entry']),
    },
  ],
  ...infrastructureConfig,
  ...programmingLanguageConfig,
  ...projectSiderbarsConfig,
  ...appliedPracticeConfig,
  ...databaseConfig,
  ...uiLibrarySiderbarsConfig,
  ...reactFrameworkConfig,
}

export default sidebarConfig
