"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./model/Server");
// 原生部署入口
async function main() {
    await (0, Server_1.init)();
    await Server_1.Server.start();
}
main();
