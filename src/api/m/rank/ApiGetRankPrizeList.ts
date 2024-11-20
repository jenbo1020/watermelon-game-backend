import { ApiCall } from "tsrpc";
import { ReqGetRankPrizeList, ResGetRankPrizeList } from "../../../shared/protocols/m/rank/PtlGetRankPrizeList";
import { Global } from "../../../model/Global";

export default async function (call: ApiCall<ReqGetRankPrizeList, ResGetRankPrizeList>) {
    const { rankInfoId } = call.req;
    const prizeList = await Global.collection('RankPrize').find(
        { rankInfoId },
        { sort: { minRank: 1 } }
    ).toArray();
    call.succ({
        list: prizeList
    });
}