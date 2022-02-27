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



## Support

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
