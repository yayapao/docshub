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
      items: ['project/frontend-toolkit-chain/ftc'],
    },
  ],
  joylintSiderBar: [
    {
      type: 'category',
      label: 'joylint',
      collapsed: false,
      items: [
        'project/frontend-toolkit-chain/joylint/readme',
        'project/frontend-toolkit-chain/joylint/eslint',
        'project/frontend-toolkit-chain/joylint/husky',
      ],
    },
  ],
  joycraSiderBar: [
    {
      type: 'category',
      label: 'joycra',
      collapsed: false,
      items: [
        'project/frontend-toolkit-chain/joycra/readme',
        'project/frontend-toolkit-chain/joycra/packages',
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
