import { ApiCall } from "tsrpc";
import { ReqGetUserAccountHistory, ResGetUserAccountHistory } from "../../../shared/protocols/m/user/PtlGetUserAccountHistory";
import { Global } from '../../../model/Global';

export default async function (call: ApiCall<ReqGetUserAccountHistory, ResGetUserAccountHistory>) {
  const { activityId, accountType, pageNumber, pageSize } = call.req;
  const uid = call.userInfo.uid;
  const match = {
    activityId, userId: uid, accountType
  }
  const total = await Global.collection('UserAccountHistory').count(match);
  if (total == 0) {
    return call.succ({
      total: 0,
      totalPage: 0,
      pageNumber,
      list: [],
      token: call.userInfo.token
    });
  }
  const totalPage = Math.ceil(total / pageSize);
  const skip = (pageNumber - 1) * pageSize;
  const list = await Global.collection('UserAccountHistory').find(
    match,
    {
      sort: { _id: -1 },
      skip,
      limit: pageSize,
      projection: { _id: 0, amount: 1, createTime: 1, tips: 1 }
    }
  ).toArray();
  call.succ({
    total,
    totalPage,
    pageNumber,
    list,
    token: call.userInfo.token
  });
}