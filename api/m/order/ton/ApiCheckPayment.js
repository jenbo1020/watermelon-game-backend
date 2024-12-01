"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../../model/Global");
const TonPay_1 = require("../../../../lib/TonPay");
const TypesInfo_1 = require("../../../../shared/constant/TypesInfo");
async function default_1(call) {
    const orderId = call.req.orderId;
    const userId = call.userInfo.uid;
    const order = await Global_1.Global.collection('OrderInfo').findOne({ orderId, userId });
    if (!order) {
        call.error('订单不存在');
        return;
    }
    if (order.status == 'newCreate') {
        const rs = await TonPay_1.TonPay.checkPayment(orderId, order.amount);
        if (rs) {
            const now = new Date().getTime();
            await Global_1.Global.collection('OrderInfo').updateOne({ _id: order._id }, { $set: { status: TypesInfo_1.EOrderStatus.success, updateTime: now } });
            // todo 赠送道具
            call.succ({ status: TypesInfo_1.EOrderStatus.success });
            return;
        }
        else {
            call.succ({ status: TypesInfo_1.EOrderStatus.fail });
            return;
        }
    }
    call.succ({ status: order.status });
}
exports.default = default_1;
