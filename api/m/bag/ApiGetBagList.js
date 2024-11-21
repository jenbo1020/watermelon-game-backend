"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const ExpressStatus_1 = require("../../../shared/constant/ExpressStatus");
async function default_1(call) {
    const { activityId } = call.req;
    const uid = call.userInfo.uid;
    const list = await Global_1.Global.collection('BagInfo').find({ activityId, uid }, { sort: { id: -1 } }).toArray();
    const expressIds = [];
    for (const item of list) {
        if (item.expressId
            && item.status == ExpressStatus_1.EExpressStatus.sent) {
            expressIds.push(item.expressId);
        }
    }
    console.log('expressIds=>', expressIds);
    let bagList = [];
    for (const item of list) {
        if (item.status == ExpressStatus_1.EExpressStatus.stop) {
            continue;
        }
        const temp = {
            bagId: item._id,
            prize: {
                name: item.prize.prizeName,
                pic: item.prize.prizePicture,
                price: item.prize.prizePrice
            },
            status: item.status,
            createDate: item.createDate
        };
        //const express = expressList.find(v => v._id == item.expressId);
        //if (express) {
        temp.expressInfo = {
            expressNumber: "",
            expressName: ""
        };
        //}
        bagList.push(temp);
    }
    call.succ({ bagList, token: call.userInfo.token });
}
exports.default = default_1;
