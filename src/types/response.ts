export interface JSONRes {
  status: Number
  error?: string
  errorObj?: Error | unknown
  data: JSON | object
}
