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
      label: 'Fullstack',
      position: 'left',
      items: [
        {
          label: 'Server',
          to: '/docs/server/cloudServer',
          // 设置高亮
          activeBaseRegex: '/docs/server',
        },
        {
          label: 'Browser',
          to: '/docs/browser/corevitals',
          activeBaseRegex: '/docs/browser',
        },
        {
          label: 'Library',
          to: '/docs/library/nodejs',
          activeBaseRegex: '/docs/library',
        },
      ],
    },
    {
      label: 'Programming',
      position: 'left',
      items: [
        {
          label: 'JavaScript',
          to: '/docs/langs/javascript/concept',
          activeBaseRegex: '/docs/langs/javascript',
        },
        {
          label: 'TypeScript',
          to: '/docs/langs/typescript/concept',
          activeBaseRegex: '/docs/langs/typescript',
        },
        {
          label: 'Node.js',
          to: '/docs/programming-language/nodejs/entry',
          activeBaseRegex: '/docs/programming-language/nodejs',
        },
        {
          label: 'Python3',
          to: '/docs/langs/python/concept',
          activeBaseRegex: '/docs/langs/python',
        },
        {
          label: 'Golang',
          to: '/docs/langs/go/concept',
          activeBaseRegex: '/docs/langs/go',
        },
        {
          label: 'HTML5',
          to: '/docs/langs/html5/concept',
          activeBaseRegex: '/docs/langs/html5',
        },
        {
          label: 'CSS3',
          to: '/docs/langs/css3/concept',
          activeBaseRegex: '/docs/langs/css3',
        },
      ],
    },
    {
      label: 'Toolkit',
      position: 'left',
      items: [
        {
          label: 'Interview',
          to: '/docs/interview/js',
          activeBaseRegex: '/docs/interview',
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
