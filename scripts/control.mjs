#!/usr/bin/env zx

import dayjs from 'dayjs'

const log = console.log
const ALERT_MESSAGE = '\nPlease confirm your input!\n'
const COSPATH = `cos://docs-1300606192/rls`

const cmds = ['build', 'upload', 'tag', 'deltag', 'rls', 'help']
let choose = await question('Choose command: ', {
  choices: cmds,
})

// 支持多参数传递
const [target, ...rest] = choose.split(' ')
switch (target) {
  case 'build':
    build(rest)
    break
  case 'tag':
    tag(...rest)
    break
  case 'deltag':
    deltag(rest)
    break
  case 'rls':
    release(...rest)
  default:
    log(chalk.red(ALERT_MESSAGE))
    log(`Support command ===> ${cmds.join(' ')}`)
}

// 打包当前项目
async function build(values) {
  if (values && values.includes('--analysis')) {
    await $`yarn build:ana`
  } else {
    await $`yarn build`
  }

  log(chalk.white.bgGreen.bold(`Successfully built at ${Date.now()}`))
}

// 生成 tag，并推送到 git
async function tag(name) {
  let tagName = name

  if (!name) {
    const COMMIT_ID = await $`git rev-parse --short HEAD`
    const COMMIT_NAME = String(COMMIT_ID).trim()
    tagName = COMMIT_NAME
  }

  log(chalk.blue(`Tag name is ${tagName}`))
  const dt = dayjs().format('YYYY-MM-DD HH:mm:ss')
  await $`git tag -a ${tagName} -m "Created at ${dt}"`
  await $`git push --tag`
  log(chalk.black.bgGreen.bold(`Successfully tag at ${Date.now()}`))
}

// 删除指定 tag 或者全部删除
async function deltag(name) {
  const shouldDeleteAll = name[0] === '--all'
  if (shouldDeleteAll) {
    await $`git tag -l | xargs git push origin -d`
    await $`git tag -l | xargs git tag -d`
    log(
      chalk.black.bgGreen.bold(
        `Successfully delete all tags on remote/local at ${Date.now()}`
      )
    )
  } else {
    const deltags = name.join(' ')
    await $`git tag -d ${deltags}`
    await $`git push origin -d ${name.join(' ')}`
    log(
      chalk.black.bgGreen.bold(
        `Successfully delete ${deltags} on remote/local at ${Date.now()}`
      )
    )
  }
}

/**
 * 发布脚本：build 之后将资源上传到 cos，同时创建 tag
 * @param name 可以指定 name 主动触发发布流程，避免没有提交导致资源名称重复的问题
 */
async function release(name) {
  let fileName = name

  if (!name) {
    const COMMIT_ID = await $`git rev-parse --short HEAD`
    fileName = String(COMMIT_ID).trim()
  }

  const path = `dist-${fileName}.tar.gz`

  await build()
  // 删除之前打包文件
  await $`rm -rf dist-*.tar.gz`
  // 打包本次更新
  await $`tar -czvf ${path} ./dist`
  // 上传到 cos
  await $`coscli cp ${path} ${COSPATH}/${path}`
  // 新建 tag 触发 webhooks，引起服务器更新
  await tag(fileName)
}
