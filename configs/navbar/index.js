const navbarConfig = {
  title: 'Docshub',
  hideOnScroll: true,
  logo: {
    alt: 'Docs Hub',
    src: 'img/logo.svg',
  },
  items: [
    { to: '/blog', label: 'Blog', position: 'left' },
    {
      label: '🧿🧿',
      position: 'left',
      items: [
        {
          label: 'Server',
          to: '/docs/server/cloudServer',
          // 设置高亮
          activeBaseRegex: '/docs/server',
        },
        {
          label: 'Database',
          to: '/docs/database/base',
          activeBaseRegex: '/docs/database',
        },
        {
          label: 'Library',
          to: '/docs/library/nodejs',
          activeBaseRegex: '/docs/library',
        },
        {
          label: 'Interview',
          to: '/docs/interview/js',
          activeBaseRegex: '/docs/interview',
        },
      ],
    },
    {
      label: 'Programming',
      position: 'left',
      items: [
        {
          label: 'Node.js',
          to: '/docs/programming-language/nodejs/entry',
          activeBaseRegex: '/docs/programming-language/nodejs',
        },
        {
          label: 'Golang',
          to: '/docs/programming-language/golang/entry',
          activeBaseRegex: '/docs/programming-language/golang',
        },
        {
          label: 'JavaScript',
          to: '/docs/programming-language/javascript/entry',
          activeBaseRegex: '/docs/programming-language/javascript/entry',
        },
        {
          label: 'HTML5',
          to: '/docs/programming-language/html5/entry',
          activeBaseRegex: 'html5/*',
        },
        {
          label: 'Python3',
          to: '/docs/langs/python/concept',
          activeBaseRegex: '/docs/langs/python',
        },
      ],
    },
    {
      className: 'header-showcase-link',
      position: 'right',
      to: 'showcase',
      'aria-label': 'showcase',
    },
    {
      href: 'https://github.com/YaYaPao',
      className: 'header-github-link',
      position: 'right',
      'aria-label': 'GitHub repository',
    },
  ],
}

module.exports = navbarConfig
