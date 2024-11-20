import { ApiCall } from "tsrpc";
import { Global } from '../../../model/Global';
import { EExpressStatus } from '../../../shared/constant/ExpressStatus';
import { ReqGetBagList, ResGetBagList } from "../../../shared/protocols/m/bag/PtlGetBagList";

export default async function (call: ApiCall<ReqGetBagList, ResGetBagList>) {
  const { activityId } = call.req;
  const uid = call.userInfo.uid;
  const list = await Global.collection('BagInfo').find({ activityId, uid }, { sort: { id: -1 } }).toArray();
  const expressIds: string[] = [];
  for (const item of list) {
    if (item.expressId
      && item.status == EExpressStatus.sent) {
      expressIds.push(item.expressId);
    }
  }
  console.log('expressIds=>', expressIds);

  let bagList: any = []
  for (const item of list) {
    if (item.status == EExpressStatus.stop) {
      continue;
    }
    const temp: any = {
      bagId: item._id,
      prize: {
        name: item.prize.prizeName,
        pic: item.prize.prizePicture,
        price: item.prize.prizePrice
      },
      status: item.status,
      createDate: item.createDate
    }
    //const express = expressList.find(v => v._id == item.expressId);
    //if (express) {
    temp.expressInfo = {
      expressNumber: "",
      expressName: ""
    }
    //}
    bagList.push(temp);
  }

  call.succ({ bagList, token: call.userInfo.token })
}