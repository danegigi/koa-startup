import type { Context, Next } from "koa";
import { json } from "../helpers/response"

export const catchAll = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error) {
    console.error('Unexpected server error:', error);
    ctx.status = 500;
    ctx.body = json({
      status: 500,
      errorObj: error,
      data: {}
    })
  }
}
