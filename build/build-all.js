const path = require('path')
const execFileSync = require('child_process').execFileSync
const utils = require('./utils')

const buildFile = path.join(__dirname, 'build.js')

const moduleList = utils.moduleList || []

moduleList.forEach(moduleName => {
  console.log('正在打包模块', moduleName)
  // 创建同步进程
  execFileSync('node', [buildFile, moduleName], {})
})
