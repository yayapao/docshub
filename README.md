# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Q&A

### 使用 `@docusaurus/plugin-ideal-image`

参考 [plugin-ideal-image
](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-ideal-image) 来处理图片展示，但是在使用过程中会出现 module not found 的问题，即使通过[如下方式](https://github.com/facebook/docusaurus/issues/2825)也无法解决

```js
module.exports = {
  ...
  plugins: [require.resolve('@docusaurus/plugin-ideal-image')],
  ...
}
```

最终，通过直接引入 `import Image from '@docusaurus/plugin-ideal-image/src/theme/IdealImage'` 的方式解决