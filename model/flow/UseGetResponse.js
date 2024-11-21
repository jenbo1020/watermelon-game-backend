"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseGetResponse = void 0;
const startedTime = new Date().format();
// 响应 GET 请求
function UseGetResponse(Server) {
    // console.log('useGetResponse...');
    Server.flows.preRecvDataFlow.push((v) => {
        const conn = v.conn;
        if (conn.httpReq.method === 'GET') {
            console.log(conn.httpReq.url);
            conn.httpRes.end(`<h1>TSRPC Server</h1><p>Server started at ${startedTime}</p>`);
            return undefined;
        }
        return v;
    });
}
exports.UseGetResponse = UseGetResponse;
