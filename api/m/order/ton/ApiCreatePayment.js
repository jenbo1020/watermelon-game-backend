"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools_1 = require("../../../../utils/Tools");
const moment_1 = __importDefault(require("moment"));
const config_1 = __importDefault(require("../../../../config"));
const Global_1 = require("../../../../model/Global");
const TypesInfo_1 = require("../../../../shared/constant/TypesInfo");
async function default_1(call) {
    const orderId = `${(0, moment_1.default)().format('YYYYMMDDHHmmss')}${Tools_1.Tools.getRandomNumbers(5)}`;
    const tonToken = config_1.default.ton_token;
    const amount = 0.01;
    const now = (0, moment_1.default)().valueOf();
    const add = await Global_1.Global.collection('OrderInfo').insertOne({
        orderId, currencyType: TypesInfo_1.ECurrencyType.Ton, userId: call.userInfo.uid,
        goodsId: call.req.goodsId, amount,
        createTime: now, status: 'newCreate'
    });
    if (!add || !add.insertedId) {
        call.error('请稍后再试');
        return;
    }
    call.succ({
        orderId, amount: 0, tonToken
    });
}
exports.default = default_1;
