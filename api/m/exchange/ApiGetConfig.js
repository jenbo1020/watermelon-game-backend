"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    var _a;
    const uid = call.userInfo.uid;
    const { accountType, activityId } = call.req;
    const userAccount = await Global_1.Global.collection('UserAccount').findOne({ activityId, userId: uid, accountType });
    const exchangeConfig = await Global_1.Global.collection('ExchangeConfig').findOne({}, { projection: { _id: 0 } });
    if (!exchangeConfig) {
        return call.error('兑换配置异常');
    }
    call.succ({
        config: exchangeConfig,
        amount: (_a = userAccount === null || userAccount === void 0 ? void 0 : userAccount.amount) !== null && _a !== void 0 ? _a : 0,
        token: call.userInfo.token
    });
}
exports.default = default_1;
