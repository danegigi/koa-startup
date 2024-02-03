import { JSONResponse } from "../types"
export const json = (option: JSONResponse): JSONResponse => {
  const defaultResponse: JSONResponse = {
    status: 200,
    data: {}
  }
  return { ...defaultResponse, ...option }
}
