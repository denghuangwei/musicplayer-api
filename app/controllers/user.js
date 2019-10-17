const jwt = require('jsonwebtoken')
const secret = 'dh-secret'
module.exports = {
    'POST /login': async (ctx, next) => {
        const { username, password } = ctx.request.body
        const token = jwt.sign({
            username
        }, secret, { expiresIn: '1d' })
        ctx.body = {
            token: token,
            status: 200
        }
        await next()
    }
}