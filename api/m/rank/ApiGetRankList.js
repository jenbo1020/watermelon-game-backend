"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const moment_1 = __importDefault(require("moment"));
async function default_1(call) {
    const { current, pageSize } = call.req;
    const skip = (current - 1) * pageSize;
    const data = await Global_1.Global.collection('RankInfo').find({}, { skip, limit: pageSize, sort: { startDate: -1 } }).toArray();
    const now = new Date().getTime();
    const list = data.map(item => {
        let statusName = "进行中";
        if (now > item.endDate) {
            statusName = "已结束";
        }
        else if (now < item.startDate) {
            statusName = "未开始";
        }
        return {
            rankInfoId: item._id,
            startDateStr: (0, moment_1.default)(item.startDate).format('YYYY-MM-DD HH:mm:ss'),
            endDateStr: (0, moment_1.default)(item.endDate).format('YYYY-MM-DD HH:mm:ss'),
            statusName
        };
    });
    call.succ({ list });
}
exports.default = default_1;
