const fs = require('fs')
const path = require('path')
const Router = require('koa-better-router')

const api = Router({ prefix: '/api' }).loadMethods()

const normalPath = path.join(__dirname, 'controllers')
fs.readdirSync(normalPath).forEach(file => {
    const controller = require(path.join(normalPath, file))
    if (/([^.]+)\.js$/.test(file)) {
        const fileName = RegExp.$1
        console.log(fileName, 12132)
        Object.keys(controller).forEach(key => {
            const keyarr = key.split(/\s+/)
            const method = keyarr[0]
            const url = keyarr[1]
            console.log(path.join(fileName, url), 3333, method)
            api.addRoute(method, '/' + path.join(fileName, url), controller[key])
        })
    }
})

module.exports = api