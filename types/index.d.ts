import * as http from 'http'
import NeuRequest from './request'
import NeuResponse from './response'
import NeuRouter from './router'
import NeuMiddleware from './middleware'
import { Logger, LoggerOptions } from './logger'

declare interface NeuErrorOptions {
  status?: number
}

declare class NeuError extends Error {
  constructor (message: string, options?: NeuErrorOptions)
}

export declare interface NeumatterOptions {
  parseMethod?: string
  errorMiddleware?: (err: NeuError, req: NeuRequest, res: NeuResponse, next: () => any) => any
  proxy?: boolean
  env?: string
  port?: number
  host?: string
  static?: string
  views?: string
  context?: object
  configureHeaders?: {
    referrer?: string
    securityPolicy?: string
    strictTransportSecurity?: boolean
    xContentTypeOptions?: boolean
    vary?: string
  }
  viewer?: object
  logger?: LoggerOptions
}

declare interface NeuJSUseOptions {
  path:  null,
  middleware: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>,
  router: NeuRouter
}

export declare class Neumatter {
  constructor(options: NeumatterOptions)

  static Logger: typeof Logger
  static Router: typeof NeuRouter

  static get serverOptions (): {
    IncomingMessage: NeuRequest,
    ServerResponse: NeuResponse
  }

  router: NeuRouter
  context: object
  middlewareTable: NeuMiddleware
  errorTable: Array<Function>
  errorMiddleware: (err: NeuError, req: NeuRequest, res: NeuResponse, next: () => any) => any
  port: number
  host: string
  proxy: boolean
  env: string
  static: string
  views: string
  parseMethod: string
  root: string
  logger: Logger
  staticMap: {}
  viewer: null|{}

  get (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  post (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  put (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  delete (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter

  get (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  post (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  put (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  patch (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  trace (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  options (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  connect (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter
  delete (path: string, RequestHandlers: Array<(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any>|((request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any)): Neumatter


  #errorListener (err: NeuError, request: NeuRequest, response: NeuResponse): Promise<any>|void
  use (options: { path: string|null, middleware: [(request: NeuRequest, response: NeuResponse, next: (err?: NeuError) => any) => any], router: NeuRouter }): Promise<Neumatter>
  useMany (args: Array<NeuJSUseOptions>): Promise<Neumatter>
  #serveFile (request: NeuRequest, response: NeuResponse): any
  #transmit (request: NeuRequest, response: NeuResponse): Promise<any>
  #transmitter (request: NeuRequest, response: NeuResponse): Promise<any>
  listener (): (request: NeuRequest, response: NeuResponse) => Promise<any>
  init (serverFn: typeof http.createServer): http.Server
  listen (options: { port?: number, host?: string }): http.Server

  static createApp (options: NeumatterOptions): Neumatter
  static createRouter (options?: { isMain?: boolean, parseMethod?: string, prefix?: string }): NeuRouter
  static load (): Promise<Neumatter>

  static get name (): string
  static get version (): string
}

export default Neumatter
