import Koa from "koa"
import bodyparser from "koa-bodyparser"
import json from "koa-json"
import { catchAll } from "./middlewares/error"
// import cors from "@koa/cors"
// import jwt from "koa-jwt"

import { router } from "./router"
import { PORT, JWT_SECRET } from "./config/main"

const app = new Koa()
// open routes
// const openRoutes = [/^\/public/]

app.use(catchAll)
// app.use(cors())
// app.use(jwt({
//   secret: JWT_SECRET
// }).unless({
//   path: [...openRoutes]
// }))
app.use(json())
app.use(bodyparser())
app.use(router.routes());
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
});
