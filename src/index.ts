import { init, Server } from './model/Server';

// 原生部署入口
async function main() {
  await init();
  await Server.start();
}
main();
