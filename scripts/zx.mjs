#!/usr/bin/env zx

import dayjs from 'dayjs'
import path from 'node:path'
import serverConfig from '/usr/local/etc/apps-config/config.mjs'

const log = console.log
const ALERT_MESSAGE = '\nPlease confirm your input!\n'
const COSPATH = `cos://docs-1300606192/rls`
const cmds = ['build', 'upload', 'tag', 'deltag', 'rls', 'help']

const [nodePath, zxPath, scriptPath, ...restData] = process.argv

let choose
if (!restData || restData.length === 0) {
  const crt = await question('Choose command: ', {
    choices: cmds,
  })
  choose = crt.split(' ')
} else {
  choose = restData
}

// 支持多参数传递
const [target, ...rest] = choose
switch (target) {
  case 'dev':
    tarFiles(...rest)
    break
  case 'build':
    build(rest)
    break
  case 'upload':
    upload(rest)
    break
  case 'tag':
    tag(...rest)
    break
  case 'deltag':
    deltag(rest)
    break
  case 'rls':
    release(...rest)
    break
  default:
    log(chalk.red(ALERT_MESSAGE))
    log(`Support command ===> ${cmds.join(' ')}`)
}

// 打包当前项目
async function build(values) {
  await $`node --version`
  if (values && values.includes('--analysis')) {
    await $`docusaurus build --bundle-analyzer --out-dir dist`
  } else {
    await $`docusaurus build --out-dir dist`
  }
}

// tar files
async function tarFiles(name) {
  let dt = dayjs().format('YYYYMMDD')
  if (!!name) {
    dt = `${name}-${dt}`
  }
  const cwd = process.cwd()
  const targetPath = path.resolve(path.join(cwd, `./dist/dist-${dt}.tar.gz`))

  await $`rm -rf dist-*.tar.gz`
  await $`tar -czvf ${targetPath} ./dist`
  return targetPath
}

/**
 * 上传文件至服务器，默认直接上传到服务器
 * @param {*} values
 *
 */
async function upload(values) {
  const st = dayjs().unix()
  const {
    user,
    host,
    paths: { docshub },
  } = serverConfig
  const serverPath = `${user}@${host}:${docshub}`
  const pwdPath = `/usr/local/etc/apps-config/apps.conf`
  await build()
  const distPath = await tarFiles()
  await $`sshpass -f ${pwdPath} scp ${distPath} ${serverPath}`
  const cs = dayjs().unix() - st
  log(chalk.bgGreen.white(`\nCost total ${cs}ms.\n\n`))
  // 新建 tag 触发 webhooks，引起服务器更新
  // tag(fileName)
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
