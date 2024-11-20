import { ApiCall } from "tsrpc";
import { ReqInit, ResInit } from "../../../shared/protocols/m/game/PtlInit";
import { Global } from "../../../model/Global";

export default async function (call: ApiCall<ReqInit, ResInit>) {
    const now = new Date().valueOf();
    // 取出本时间段内的活动配置
    const filter = {
        activityDateStartDate: { $lte: now },
        activityDateEndDate: { $gte: now }
    }
    const list = await Global.collection('ActivityInfo').find(filter).toArray();
    const activity = list.map(item => {
        return {
            cover: item.activityCover,
            name: item.activityName,
            content: item.activityContent
        }
    });
    call.succ({
        loading: "",
        activity
    })
}