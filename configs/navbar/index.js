const navbarConfig = {
  title: '个人学习经验笔记存放',
  hideOnScroll: true,
  logo: {
    alt: '个人学习经验笔记存放',
    src: 'img/logo.svg',
  },
  items: [
    {
      label: '编程预备',
      position: 'left',
      items: [
        {
          label: '开发前准备',
          to: '/docs/before-dev/frontend-handbook/entry',
          activeBaseRegex: '/docs/before-dev',
        },
      ],
    },
    {
      label: '编程语言',
      position: 'left',
      items: [
        {
          label: 'Golang',
          to: '/docs/programming-language/golang/entry',
          activeBaseRegex: '/docs/programming-language',
        },
        {
          label: 'HTML5',
          to: '/docs/programming-language/html5/entry',
          activeBaseRegex: '/docs/programming-language',
        },
        {
          label: 'JavaScript',
          to: '/docs/programming-language/javascript/entry',
          activeBaseRegex: '/docs/programming-language',
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
