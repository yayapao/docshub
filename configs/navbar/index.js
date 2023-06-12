const navbarConfig = {
  title: '个人学习经验笔记存放',
  hideOnScroll: true,
  logo: {
    alt: '个人学习经验笔记存放',
    src: 'img/logo.svg',
  },
  items: [
    // { to: '/blog', label: 'Blog', position: 'left' },
    // {
    //   label: '🧿🧿',
    //   position: 'left',
    //   items: [
    //     {
    //       label: 'Server',
    //       to: '/docs/server/cloudServer',
    //       // 设置高亮
    //       activeBaseRegex: '/docs/server',
    //     },
    //     {
    //       label: 'Interview',
    //       to: '/docs/interview/js',
    //       activeBaseRegex: '/docs/interview',
    //     },
    //   ],
    // },
    {
      label: '数据库基础',
      position: 'left',
      items: [
        {
          label: '概念&应用',
          to: '/docs/database/base',
          activeBaseRegex: '/docs/database',
        },
      ],
    },
    {
      label: '图数据库',
      position: 'left',
      items: [
        {
          label: '概念&应用',
          to: '/docs/gdb/base',
          activeBaseRegex: '/docs/gdb/',
        },
      ],
    },
    // {
    //   className: 'header-showcase-link',
    //   position: 'right',
    //   to: 'showcase',
    //   'aria-label': 'showcase',
    // },
    // {
    //   href: 'https://github.com/YaYaPao',
    //   className: 'header-github-link',
    //   position: 'right',
    //   'aria-label': 'GitHub repository',
    // },
  ],
}

module.exports = navbarConfig
