const path = require('path')
const Koa = require('koa')
const app = new Koa()

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const cors = require('@koa/cors');
app.use(cors(
    {
        origin: '*',
        exposeHeaders: ['X-Requested-With', 'User-Agent', 'Referer', 'Content-Type', 'Cache-Control,accesstoken', 'WWW-Authenticate', 'Server-Authorization'],
        maxAge: 86400,
        credentials: true,
        allowHeaders: ['Content-Type', 'Authorization', 'Accept']
    }
))

const serve = require('koa-static')
app.use(serve(path.join(__dirname, 'static'), {
    maxage: 1000 * 60 * 60
}))

app.use(function (ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    });
});

const jwt = require('koa-jwt');
app.use(jwt({ secret: 'dh-secret' }).unless({ path: [/^\/api\/user\/login/] }))

const api = require('./router')
app.use(api.middleware())

app.listen(3000, () => {
    console.log('listening on 3000, you can visit http://localhost:3000')
})