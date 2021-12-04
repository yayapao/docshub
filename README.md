# Docshub

## Local Development

Learning [CLI](https://docusaurus.io/zh-CN/docs/cli) to aaccess more scripts!

### develop in local

```
$ yarn dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `dist` directory and can be served using any static contents hosting service.

And you can run `$ yarn serve` to test static contents in local.

### release

```
$ yarn rls
```

This command will upload the packaged resource to cos and create a tag, then trigger the webhooks to release the static contents in server side.

## Docusaurus notes

-  By default, any Markdown or Javascript file starting with _ will be ignored, and no routes will be created for that file (see the exclude option).

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

### .mdx 内引入自定义组件之后，高亮状态失效的问题

通过在组件使用的后面加上 .md 的注释后解决，例如：

```mdx
import { HighlightWithText } from '../../src/components/Highlights'

<HighlightWithText>通过 tar 解/压文件</HighlightWithText>

- `tar -zcvf target.tar.gz [package files]` 进行压缩
- `tar -zxvf target.tar.gz` 解压文件

<!-- fix Highlights -->

// 添加上面的注释后，能够正常展示高亮
#### 可执行权限
```

## Support

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
