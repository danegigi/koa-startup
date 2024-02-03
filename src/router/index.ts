import Router from "koa-router"

import { HomeHandler, AboutHandler, ContactHandler } from "./handlers/home"
import { FulfillmentHandler } from "./handlers/fulfillment"
import { BASE_ROUTE_PREFIX } from "../config/main"


export const router: Router = new Router({
  prefix: BASE_ROUTE_PREFIX
})

router.get("/", HomeHandler)
router.get("/about-us", AboutHandler)
router.get("/contact-us", ContactHandler)
router.put("/fulfillment/:id", FulfillmentHandler)

const pub = new Router()
pub.get("/knowledgebase", ctx => ctx.body = "Knowlege is Power")
pub.get("/careers", ctx => ctx.body = "Jobs")
pub.del("careers", ctx => ctx.body = "Jobs")

router.use("/public", pub.routes(), pub.allowedMethods())
