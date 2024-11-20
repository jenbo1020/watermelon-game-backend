import { ApiCall } from "tsrpc";
import { ReqLotteryPrizeList, ResLotteryPrizeList } from "../../../shared/protocols/m/lottery/PtlLotteryPrizeList";
import { Global } from "../../../model/Global";

export default async function (call: ApiCall<ReqLotteryPrizeList, ResLotteryPrizeList>) {
    const { lotteryInfoId } = call.req;
    const prizeList = await Global.collection('LotteryPrize').find(
        { lotteryInfoId },
        { sort: { minRank: 1 } }
    ).toArray();
    const list = prizeList.map(item => {
        return {
            ...item.prizeInfo
        }
    })
    call.succ({
        list
    });
}