"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    var _a, _b;
    const uid = call.userInfo.uid;
    let userInfo = {
        uid,
        nickname: '',
        avatar: ''
    };
    const user = await Global_1.Global.collection('UserInfo').findOne({ _uid: call.userInfo.uid });
    if (user) {
        userInfo.nickname = (_a = user === null || user === void 0 ? void 0 : user.nickname) !== null && _a !== void 0 ? _a : '';
        userInfo.avatar = (_b = user === null || user === void 0 ? void 0 : user.avatar) !== null && _b !== void 0 ? _b : '';
    }
    return call.succ({ token: call.userInfo.token, userInfo });
}
exports.default = default_1;
