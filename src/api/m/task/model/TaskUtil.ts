import { Global } from '../../../../model/Global';
import { DbTaskInfo } from '../../../../shared/dbItems/task/DbTaskInfo';
import { ETaskState } from '../../../../shared/constant/task/TaskType';
import { DbTaskDetail } from '../../../../shared/dbItems/task/DbTaskDetail';
import moment from 'moment';
import { ETaskRefreshType } from '../../../../shared/constant/task/TaskRefreshType';

interface TaskState {
  /** 任务状态 */
  taskState: ETaskState,
  /** 进度序号，从0开始 */
  progressIndex: number,
  /** 完成数量 */
  completeValue: number,
}
export class TaskUtil {
  /**
   * 检测任务信息
   * @param activityId 
   * @param string 
   * @param taskId 
   * @param taskInfo 
   * @returns 
   */
  static async checkTask(activityId: string, taskId: string, taskInfo: DbTaskInfo,): Promise<{ status: boolean, msg: string }> {

    if (taskInfo.activityId != activityId) {
      return { status: false, msg: '任务不存在' }
    }
    if (taskInfo.status == 'offline') {
      return { status: false, msg: '任务已下线' }
    }
    return { status: true, msg: 'ok' }
  }

  /**
   * 检测用户的任务状态及进程
   * @param uid 
   * @param taskInfo 
   * @returns 
   */
  static async checkTaskState(uid: string, taskInfo: DbTaskInfo, taskDetail: DbTaskDetail[]): Promise<TaskState> {
    const nowTime = Date.now();
    // 是否在激活时间内
    if (taskInfo.enableTime[0] > nowTime) {
      console.log('111');
      return {
        taskState: ETaskState.unEnable,
        progressIndex: 0,
        completeValue: 0,
      }
    }
    // 是否接受任务
    const taskReceive = await Global.collection('TaskUserReceive').findOne({ uid, taskId: taskInfo._id }, { sort: { _id: -1 } });
    if (!taskReceive) {
      console.log('222');
      return {
        taskState: ETaskState.unStart,
        progressIndex: 0,
        completeValue: 0,
      }
    }
    // 处理周期性的问题
    let startTime = 0;
    if (taskInfo.refreshType == ETaskRefreshType.always) {
      startTime = taskReceive.createTime;
    } else if (taskInfo.refreshType == ETaskRefreshType.daily) {
      startTime = moment().utcOffset(8).startOf('day').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.weekly) {
      startTime = moment().utcOffset(8).startOf('week').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.monthly) {
      startTime = moment().utcOffset(8).startOf('month').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.yearly) {
      startTime = moment().utcOffset(8).startOf('year').valueOf();
    }
    console.log('taskReceive', taskReceive, uid, taskInfo._id);
    if (taskInfo.refreshType != ETaskRefreshType.always && taskReceive.createTime < startTime) {

      console.log('333');
      return {
        taskState: ETaskState.unStart,
        progressIndex: 0,
        completeValue: 0,
      }
    }
    // 是否领取奖励
    const reward = await Global.collection('TaskUserReward').findOne({ uid, taskId: taskInfo._id }, { sort: { _id: -1 } });
    if (reward && reward.createTime >= startTime) {

      console.log('444');
      if (taskInfo.refreshType == ETaskRefreshType.always) {

        console.log('555');
        return {
          taskState: ETaskState.unStart,
          progressIndex: 0,
          completeValue: 0,
        }
      }

      console.log('666');
      return {
        taskState: ETaskState.finished,
        progressIndex: 0,
        completeValue: 0,
      }
    }
    // 未领取奖励-是否完成任务
    const reportData = await Global.collection('TaskUserReport').aggregate([
      { $match: { uid, taskId: taskInfo._id, createTime: { $gte: startTime } } },
      { $group: { _id: "$data.index", value: { $sum: "$data.value" } } },
      { $sort: { _id: 1 } }
    ], { readPreference: "primaryPreferred" }).toArray();
    console.log('reportData', reportData);
    if (!reportData.length) {

      console.log('777');
      return {
        taskState: ETaskState.inTask,
        progressIndex: 0,
        completeValue: 0,
      }
    }


    // 处理完成的详情
    // 先处理最后一个详情
    let taskState = ETaskState.inTask, progressIndex = 0, completeValue = 0;
    console.log('taskDetail.length:', taskDetail.length);
    console.log('reportData.length:', reportData.length);
    // const reportDataItem = reportData[index];

    for (let a = 0; a < reportData.length; a++) {
      const element = reportData[a];
      const detail = taskDetail[a] as any;
      // console.log('tttt=>', a, taskDetail.length);

      // console.log('element:', element);
      // console.log('detail:', detail);


      if (a == taskDetail.length - 1) {
        if (detail.hasDialog) {
          progressIndex = a;
          completeValue = element.value;
          if (element.value >= 1) {
            taskState = ETaskState.receiveAward;
            completeValue = 1;
          } else {
            taskState = ETaskState.inTask;
          }
          return {
            taskState,
            progressIndex,
            completeValue,
          }
        } else if (detail.operateInfo) {
          progressIndex = a;
          completeValue = element.value;
          if (element.value >= detail.operateInfo.operateValue) {
            console.log('detail.operateInfo if');
            taskState = ETaskState.receiveAward;
            completeValue = detail.operateInfo.operateValue;
          } else {
            console.log('detail.operateInfo else');
            taskState = ETaskState.inTask;
          }
          return {
            taskState,
            progressIndex,
            completeValue,
          }
        }
        break;
      }
      else {
        taskState = ETaskState.inTask
        if (detail.hasDialog) {
          if (element.value >= 1) {
            progressIndex = a + 1
            completeValue = 0
          } else {
            progressIndex = a
            completeValue = element.value
          }
        } else if (detail.operateInfo) {
          if (element.value >= detail.operateInfo.operateValue) {
            console.log('detail.operateInfo if');
            progressIndex = a + 1;
            completeValue = 0;
          } else {
            console.log('detail.operateInfo else');
            progressIndex = a;
            completeValue = element.value;
          }
        }
      }
    }
    return {
      taskState,
      progressIndex,
      completeValue,
    }
  }
}