"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const { activityId } = call.req;
    const list = await Global_1.Global.collection('FruitDrawPrize').find({ activityId, isEnabled: true }, { sort: { moduleType: 1, _id: -1 } }).toArray();
    if (!list)
        return call.error('奖品列表异常');
    call.succ({
        basicPrize: list.map((item) => ({
            prizeId: item._id,
            prizeName: item.prize.prizeName,
            prizePic: item.prize.prizePicture,
            prizePrice: item.prize.prizePrice.toString()
        })),
        token: call.userInfo.token
    });
}
exports.default = default_1;
