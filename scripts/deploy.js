//  
/**
 * 利用 fs-extra 模块来复制文件
 */

const fs = require('fs-extra')
const routes = require('./routes')
const path = require('path')

routes.forEach((route) => {
    /**
     * 第一个参数是 要复制的文件路径
     * 第二个参数 是目标路径
     * 在 package.json 中 build命令中添加命令
     */
    fs.copySync('./build/index.html', path.join('./build/'+ route, 'index.html'))
})