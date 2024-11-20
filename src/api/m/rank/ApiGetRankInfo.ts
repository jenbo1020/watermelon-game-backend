import { ApiCall } from "tsrpc";
import { ReqGetRankInfo, ResGetRankInfo } from "../../../shared/protocols/m/rank/PtlGetRankInfo";
import { Global } from "../../../model/Global";
import moment from "moment";

export default async function (call: ApiCall<ReqGetRankInfo, ResGetRankInfo>) {
    const { rankInfoId } = call.req;
    const info = await Global.collection('RankInfo').findOne({ _id: rankInfoId })
    if (!info) {
        call.error('信息错误')
        return;
    }
    const now = new Date().getTime();
    let statusName = "进行中";
    if (now > info.endDate) {
        statusName = "已结束"
    } else if (now < info.startDate) {
        statusName = "未开始"
    }
    const prizeList = await Global.collection('RankPrize').find(
        { rankInfoId },
        { sort: { minRank: 1 } }
    ).toArray();
    call.succ({
        data: {
            rankInfo: {
                rankInfoId: info._id,
                startDateStr: moment(info.startDate).format('YYYY-MM-DD HH:mm:ss'),
                endDateStr: moment(info.endDate).format('YYYY-MM-DD HH:mm:ss'),
                statusName
            },
            prizeList
        }
    })
}