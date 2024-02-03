
import type { Context } from "koa"

/**
 * Fulfillment Handler
 */
export const FulfillmentHandler = async (ctx: Context) => {
  const data = ctx.request.body;
  const params = ctx.params;
  console.log("data: ", data);
  console.log("params: ", params);
  ctx.body = "Fulfillment"
}
