import type { HttpConnection, HttpServer } from 'tsrpc';

const startedTime = new Date().format();

// 响应 GET 请求
export function UseGetResponse(Server: HttpServer<any>) {
  // console.log('useGetResponse...');
  Server.flows.preRecvDataFlow.push((v) => {
    const conn = v.conn as HttpConnection;
    if (conn.httpReq.method === 'GET') {
      console.log(conn.httpReq.url);
      conn.httpRes.end(`<h1>TSRPC Server</h1><p>Server started at ${startedTime}</p>`);
      return undefined;
    }

    return v;
  });
}
