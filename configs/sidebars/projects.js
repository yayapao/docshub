const ftcPrefix = 'project/frontend-toolkit-chain/'

const fte = {
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
      items: [
        'project/sentry/sentry',
        'project/sentry/self_hosted',
        'project/sentry/development',
        'project/sentry/features',
        'project/sentry/sourcecode',
        'project/sentry/faq',
      ],
    },
  ],
}

const ftc = {
  ftcSiderBar: [
    {
      type: 'category',
      label: 'FTC',
      collapsed: false,
      items: [`${ftcPrefix}ftc`],
    },
  ],
  joycraSiderBar: [
    {
      type: 'category',
      label: 'joycra',
      collapsed: false,
      items: [`${ftcPrefix}joycra/readme`, `${ftcPrefix}joycra/cli`],
    },
  ],
  joyutilsSiderBar: [
    {
      type: 'category',
      label: 'joyutils',
      collapsed: false,
      items: [`${ftcPrefix}joyutils/readme`],
    },
  ],
  joylintSiderBar: [
    {
      type: 'category',
      label: 'joylint',
      collapsed: false,
      items: [
        `${ftcPrefix}joylint/readme`,
        `${ftcPrefix}joylint/eslint`,
        `${ftcPrefix}joylint/husky`,
      ],
    },
  ],
}
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const projectSiderbarsConfig = {
  ...fte,
  ...ftc,
}

module.exports = projectSiderbarsConfig
