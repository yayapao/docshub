/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  databaseSiderbar: [
    {
      type: 'category',
      label: '数据库基础',
      collapsed: false,
      items: [
        'database/base',
        'database/mysql',
        'database/postgres',
        'database/redis',
        'database/clickhouse',
        'database/kafka',
      ],
    },
  ],
  gdbSiderbar: [
    {
      type: 'category',
      label: '图数据库',
      collapsed: false,
      items: ['gdb/base', 'gdb/standard'],
    },
  ],
}

module.exports = sidebars
