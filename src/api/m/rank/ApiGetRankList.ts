import { ApiCall } from "tsrpc";
import { ReqGetRankList, ResGetRankList } from "../../../shared/protocols/m/rank/PtlGetRankList";
import { Global } from "../../../model/Global";
import moment from "moment";

export default async function (call: ApiCall<ReqGetRankList, ResGetRankList>) {
    const { current, pageSize } = call.req;
    const skip = (current - 1) * pageSize;
    const data = await Global.collection('RankInfo').find(
        {},
        { skip, limit: pageSize, sort: { startDate: -1 } },
    ).toArray();
    const now = new Date().getTime();
    const list = data.map(item => {
        let statusName = "进行中";
        if (now > item.endDate) {
            statusName = "已结束"
        } else if (now < item.startDate) {
            statusName = "未开始"
        }
        return {
            rankInfoId: item._id,
            startDateStr: moment(item.startDate).format('YYYY-MM-DD HH:mm:ss'),
            endDateStr: moment(item.endDate).format('YYYY-MM-DD HH:mm:ss'),
            statusName
        }
    })
    call.succ({ list })
}