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
const sidebars = {
  serverSiderbar: [
    {
      type: 'category',
      label: 'Site Reliability',
      collapsed: true,
      items: ['server/cloudServer', 'server/nginx', 'server/docker'],
    },
    {
      type: 'category',
      label: 'Manager',
      collapsed: true,
      items: ['server/git', 'server/npm'],
    },
    {
      type: 'category',
      label: 'Package',
      collapsed: true,
      items: ['package/nodejs'],
    },
  ],
  browserSiderbar: [
    {
      type: 'category',
      label: 'WPM',
      collapsed: true,
      items: ['browser/corevitals', 'browser/chromeperf'],
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
      label: 'HTML5',
      collapsed: true,
      items: [
        'langs/html5/concept',
        'langs/html5/project',
        'langs/html5/element',
      ],
    },
  ],
}

module.exports = sidebars
