import Router from "@koa/router"

export const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = "hello world"
  next()
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
  next()
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
  next()
})
