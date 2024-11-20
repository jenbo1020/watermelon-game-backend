import { ApiCall } from "tsrpc";
import { ReqGetPrizeList, ResGetPrizeList } from "../../../shared/protocols/m/fruitDraw/PtlGetPrizeList";
import { Global } from "../../../model/Global";

export default async function (call: ApiCall<ReqGetPrizeList, ResGetPrizeList>) {
    const {activityId} = call.req
    const list = await Global.collection('FruitDrawPrize').find({activityId, isEnabled: true},{sort: {moduleType: 1, _id: -1}}).toArray()
    if(!list) return call.error('奖品列表异常')
    call.succ({
      basicPrize: list.map((item) => (
        {
          prizeId: item._id,
          prizeName: item.prize.prizeName,
          prizePic: item.prize.prizePicture,
          prizePrice: item.prize.prizePrice.toString()
        }
      )),
      token: call.userInfo.token
    })
}