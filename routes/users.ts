import { ParameterizedContext } from 'koa'
import Router from "@koa/router"

export const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'home page for users'
})

router.get('/:name', (ctx) => {
  const {params:{name}} = ctx

  ctx.body =`Welcome ${name || "Guest"}!`
})

router.post("/create", (ctx) => {
  ctx.body = ctx.request.body
})
