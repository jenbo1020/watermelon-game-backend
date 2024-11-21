"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const list = await Global_1.Global.collection('Notify')
        .find({})
        .toArray();
    call.succ({
        list,
        token: call.userInfo.token
    });
}
exports.default = default_1;
