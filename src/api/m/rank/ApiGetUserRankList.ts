import { ApiCall } from "tsrpc";
import { ReqGetUserRankList, ResGetUserRankList } from "../../../shared/protocols/m/rank/PtlGetUserRankList";
import { Global } from "../../../model/Global";

export default async function (call: ApiCall<ReqGetUserRankList, ResGetUserRankList>) {
    let { rankInfoId, current, pageSize } = call.req;
    let match: any
    if (rankInfoId) {
        match = { _id: rankInfoId }
    } else {
        const now = new Date().getTime();
        match = { startDate: { $lte: now }, endDate: { $gte: now } }
    }
    const rankInfo = await Global.collection('RankInfo').findOne(match);
    if (!rankInfo) {
        call.error('暂无排行榜记录');
        return;
    }
    rankInfoId = rankInfo._id;
    const skip = (current - 1) * pageSize;
    const recordList = await Global.collection('RankUserRecord').find(
        { rankInfoId },
        { sort: { amount: -1, updateDate: 1 }, skip, limit: pageSize }
    ).toArray();
    const uids = recordList.map(item => { return item._id });
    const userList = await Global.collection('UserInfo').find({ _id: { $in: uids } }).toArray();
    const prizeList = await Global.collection('RankPrize').find({ rankInfoId }).toArray();
    const list = recordList.map((item, index) => {
        const rankNo = skip + index + 1;
        const user = userList.find(a => { return a._id == item.uid });
        const prize = prizeList.find(a => { return a.minRank <= rankNo && a.maxRank >= rankNo })
        return {
            uid: item.uid,
            nickname: user ? (user?.nickname ?? '') : '',
            avatar: user ? (user?.avatar ?? '') : '',
            rankNo,
            value: item.value,
            prize: prize ? prize.prizeInfo : undefined,
            received: item.received,
            receivedDate: item.receivedDate
        }
    })
    call.succ({ list })

}