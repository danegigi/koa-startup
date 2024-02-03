import Router from "koa-router"

import { HomeHandler, AboutHandler, ContactHandler } from "./handlers/home"
import { FulfillmentHandler } from "./handlers/fulfillment"
import { BASE_ROUTE_PREFIX } from "../config/main"


export const router: Router = new Router({
  prefix: BASE_ROUTE_PREFIX
})

const pub = router.prefix("/public")
pub.get("/knowledgebase", ctx => ctx.body = "Knowlege is Power")
pub.get("/careers", ctx => ctx.body = "Jobs")

router.get("/", HomeHandler)
router.get("/about-us", AboutHandler)
router.get("/contact-us", ContactHandler)
router.put("/fulfillment/:id", FulfillmentHandler)
