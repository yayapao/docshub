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
      label: '学习思考',
      position: 'left',
      items: [
        {
          label: '计算机网络',
          to: '/docs/network/network',
          activeBaseRegex: '/docs/network',
        },
        {
          label: '网络协议',
          to: '/docs/network/http',
          activeBaseRegex: '/docs/network',
        },
      ],
    },
    {
      label: '经验笔记',
      position: 'left',
      items: [
        {
          label: '预开发阶段',
          to: '/docs/before-dev/frontend-handbook/entry',
          activeBaseRegex: '/docs/before-dev',
        },
        // {
        //   label: 'Node.js',
        //   to: '/docs/programming-language/nodejs/entry',
        //   activeBaseRegex: '/docs/programming-language/nodejs',
        // },
        // {
        //   label: 'Golang',
        //   to: '/docs/programming-language/golang/entry',
        //   activeBaseRegex: '/docs/programming-language/golang',
        // },
        // {
        //   label: 'JavaScript',
        //   to: '/docs/programming-language/javascript/entry',
        //   activeBaseRegex: '/docs/programming-language/javascript/entry',
        // },
        // {
        //   label: 'HTML5',
        //   to: '/docs/programming-language/html5/entry',
        //   activeBaseRegex: 'html5/*',
        // },
        // {
        //   label: 'Python3',
        //   to: '/docs/langs/python/concept',
        //   activeBaseRegex: '/docs/langs/python',
        // },
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
