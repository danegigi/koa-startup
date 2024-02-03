import type { Context } from "koa"

/**
 * Home page Handler
 */
export const HomeHandler = async (ctx: Context) => {
  ctx.body = "Welcome"
}

/**
 * About Us Page Handler
 */
export const AboutHandler = async (ctx: Context) => {
  ctx.body = "About Us"
}

/**
 * Contact Us Page Handler
 */
export const ContactHandler = async (ctx: Context) => {
  ctx.body = "About Us"
}
