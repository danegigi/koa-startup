import Koa from 'koa'
import Router from "@koa/router"
import onerror from 'koa-onerror'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import serve from 'koa-static'
import path from 'path'

// routes
import {users, common} from "./routes"

import http from 'http'

const app = new Koa()
const router = new Router()
const port = process.env.PORT || 3000

onerror(app)

// common middlewares
app.use(json())
app.use(logger())
app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}))

const staticPath = path.join(__dirname, 'public')
console.log("static path", staticPath)
app.use( serve(staticPath, {

}))

// routes
router.use("", common.routes(), common.allowedMethods())
router.use("/users", users.routes(), users.allowedMethods())

app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('Server Error', err, ctx)
})

http
  .createServer(app.callback())
  .listen(port)
