/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const repoSiderbarsConfig = {
  handbookSiderBar: [
    {
      type: 'category',
      label: 'hanbooks',
      collapsed: false,
      items: ['repo/my-dev-handbook/docshub', 'repo/my-dev-handbook/annualRings'],
    },
  ],
  wpmonitSiderBar: [
    {
      type: 'category',
      label: 'wpmonit',
      collapsed: false,
      items: ['repo/wpmonit/readme', 'repo/wpmonit/metrics'],
    },
  ],
  reactErrorCatcher: [
    {
      type: 'category',
      label: 'React Error Catcher',
      collapsed: false,
      items: ['repo/react-error-catcher/readme', 'repo/react-error-catcher/design'],
    },
  ],
  lintddSiderBar: [
    {
      type: 'category',
      label: 'lintdd',
      collapsed: false,
      items: ['repo/lintdd/readme', 'repo/lintdd/design'],
    },
  ],
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const projectSiderbarsConfig = {
  fteSiderBar: [
    {
      type: 'category',
      label: 'FTE',
      collapsed: false,
      items: ['project/fte/fte', 'project/fte/judgement'],
    },
  ],
  wpmSiderBar: [
    {
      type: 'category',
      label: 'WPM',
      collapsed: false,
      items: ['project/wpm/wpm', 'project/wpm/metrics'],
    },
  ],
  sentrySiderBar: [
    {
      type: 'category',
      label: 'Sentry',
      collapsed: false,
      items: ['project/sentry/sentry', 'project/sentry/self_hosted'],
    },
  ]
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  serverSiderbar: [
    {
      type: 'category',
      label: 'Site Reliability',
      collapsed: true,
      items: [
        'server/cloudServer',
        'server/nginx',
        'server/docker',
        'server/db',
        'server/github'
      ],
    },
    {
      type: 'category',
      label: 'Manager',
      collapsed: true,
      items: ['server/git', 'server/npm'],
    },
  ],
  browserSiderbar: [
    {
      type: 'category',
      label: 'WPM',
      collapsed: true,
      items: ['browser/corevitals', 'browser/chromeperf', 'browser/navigator'],
    },
    {
      type: 'category',
      label: 'Devtools',
      collapsed: true,
      items: ['browser/devtools'],
    },
  ],
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
      label: 'Library',
      collapsed: true,
      items: ['library/nodejs', 'library/python'],
    },
    {
      type: 'category',
      label: 'React',
      collapsed: true,
      items: [
        'library/react/concept',
        'library/react/libs',
        'library/react/qa',
      ],
    },
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
  languageSiderBar: [
    {
      type: 'category',
      label: 'JavaScript',
      collapsed: true,
      items: [
        'langs/javascript/concept',
        'langs/javascript/grammar',
        'langs/javascript/project',
      ],
    },
    {
      type: 'category',
      label: 'TypeScript',
      collapsed: true,
      items: ['langs/typescript/concept', 'langs/typescript/project'],
    },
    {
      type: 'category',
      label: 'Node.js',
      collapsed: true,
      items: ['langs/nodejs/concept', 'langs/nodejs/project'],
    },
    {
      type: 'category',
      label: 'Python3',
      collapsed: true,
      items: ['langs/python/concept', 'langs/python/grammar'],
    },
    {
      type: 'category',
      label: 'Golang',
      collapsed: true,
      items: ['langs/go/concept', 'langs/go/grammar'],
    },
    {
      type: 'category',
      label: 'HTML5',
      collapsed: true,
      items: [
        'langs/html5/concept',
        'langs/html5/project',
        'langs/html5/element',
      ],
    },

    {
      type: 'category',
      label: 'CSS3',
      collapsed: true,
      items: ['langs/css3/concept', 'langs/css3/project'],
    },
  ],
  ...repoSiderbarsConfig,
  ...projectSiderbarsConfig
}

module.exports = sidebars
