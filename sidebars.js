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
  serverSiderbar: [{
    type: 'category',
    label: 'Site Reliability',
    collapsed: true,
    items: [
      'server/cloudServer', 'server/docker'
    ]
  }],
  browserSiderbar: [{
    type: 'category',
    label: 'WPM',
    collapsed: true,
    items: [
      'browser/wpm'
    ]
  }]
};

module.exports = sidebars;
