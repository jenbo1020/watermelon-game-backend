import { ApiCall } from "tsrpc";
import { ReqGetActivity, ResGetActivity } from "../../../shared/protocols/m/activity/PtlGetActivity";
import { Global } from "../../../model/Global";
import { ActivityStatus, ActivityStatusName } from "../../../shared/constant/ActivityStatus";

export default async function (call: ApiCall<ReqGetActivity, ResGetActivity>) {
  const { activityId } = call.req;
  const activity = await Global.collection('ActivityInfo').findOne({_id: activityId});
  if (!activity) {
    call.error('活动不存在')
    return;
  }
  const now = Date.now();
  const { activityDateStartDate, activityDateEndDate } = activity;
  let status = ActivityStatus.NOT_STARTED;
  let statusText = ActivityStatusName.NOT_STARTED;

  if (now > activityDateEndDate) {
    status = ActivityStatus.FINISHED;
    statusText = ActivityStatusName.FINISHED;
  } else if (now >= activityDateStartDate) {
    status = ActivityStatus.OPENING;
    statusText = ActivityStatusName.OPENING;
  }

  call.succ({
    ...activity,
    status,
    statusText,
    token: call.userInfo.token
  });
}