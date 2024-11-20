import request from 'request'
import * as http from 'http'
import * as https from 'https'
import { Counter, Logger } from 'tsrpc'

const httpsKeepAliveAgent = new https.Agent({
  keepAlive: true
})

const httpKeepAliveAgent = new http.Agent({
  keepAlive: true
})

export class HttpRequest {
  static counter = new Counter()

  /**
   * Get
   */
  static get<T = any>(uri: string, qs: object, logger?: Logger): Promise<T> {
    return this.request({
      method: 'GET',
      uri: uri,
      qs: qs
    }, logger)
  }

  /**
   * POST
   * @param uri 请求地址 
   * @param qs 
   * @param body 请求参数
   * @param json 是否json格式
   * @param logger 是否打印日志
   * @returns 
   */
  static post<T = any>(uri: string, qs: object, body: any, json?: boolean, logger?: Logger): Promise<T> {
    return this.request({
      method: 'POST',
      uri: uri,
      qs: qs,
      body: body,
      json: json
    }, logger)
  }

  /**
   * @Date: 2022-08-19 15:17:37
   * @description: POST
   * @param uri 请求地址 
   * @param headers 
   * @param body 请求参数
   * @param json 是否json格式
   * @param logger 是否打印日志
   * @return {*}
   */
  static customPost<T = any>(uri: string, headers: any, body: any, json?: boolean, logger?: Logger): Promise<T> {
    return this.request({
      method: 'POST',
      uri: uri,
      headers: headers,
      body: body,
      json: json
    }, logger)
  }


  private static request<T = any>(options: request.CoreOptions & { uri: string }, logger?: Logger): Promise<T> {
    return new Promise<T>((rs, rj) => {
      let reqId = this.counter.getNext()
      let op = request({
        timeout: 20000,
        json: options.json || true,
        gzip: true,
        agent: options.uri.startsWith('https') ? httpsKeepAliveAgent : httpKeepAliveAgent,
        ...options
      }, async (err?: Error, res?: request.Response, body?: any) => {
        if (err) {
          logger?.error(`HttpError->[${reqId}]:${err.message}`)
          rj(err)
          return
        } else if (res && res.statusCode !== 200) {
          logger?.error(`HttpError->[${reqId}]:${res.statusCode}-${res.statusMessage}`, res.body)
          rj(new Error(res.body?.msg || `${res.statusCode} ${res.statusMessage}`))
          return
        } else if (!body) {
          logger?.error(`HttpError->[${reqId}] Empty res body`)
          rj(new Error(`Empty res body`))
          return
        }
        if (options.json && typeof body !== 'object') {
          try {
            body = JSON.parse(body)
          } catch (error) {
            logger?.error(`HttpError->[${reqId}] JSON format error`)
            rj(new Error(`HttpReq JSON format Error`))
            return
          }
        } else if (options.json === false && typeof body === 'string') {


        } else {
          logger?.debug(`接受 Http 返回:->[${reqId}]`, JSON.stringify(res?.body, null, 2))
          rs(body)
        }
      })
      logger?.debug(`发起 Http 请求:->[${reqId}] [${op.method}] ${op.uri.href} ${op.method === 'POST' ? `Body:${op.body}` : ''}`)
    })
  }
}