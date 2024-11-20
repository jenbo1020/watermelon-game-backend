
import type { DbAchievement } from './achievement/DbAchievement';
import type { DbActivityInfo } from './activity/DbActivityInfo';
import type { DbAdminLoginError } from './admin/DbAdminLoginError';
import type { DbAdminLoginLog } from './admin/DbAdminLoginLog';
import type { DbAdminRole } from './admin/DbAdminRole';
import type { DbAdminUser } from './admin/DbAdminUser';
import type { DbBagInfo } from './bag/DbBagInfo';
import type { DbLotteryInfo } from './lottery/DbLotteryInfo';
import type { DbLotteryPrize } from './lottery/DbLotteryPrize';
import type { DbExchangeConfig } from './exchange/DbExchangeConfig';
import type { DbExchangeLog } from './exchange/DbExchangeLog';
import type { DbExchangePrize } from './exchange/DbExchangePrize';
import { DbFruitComposePrize } from './fruitDraw/DbFruitComposePrize';
import { DbFruitDrawPrize } from './fruitDraw/DbFruitDrawPrize';
import type { DbFruitGame } from './game/DbFruitGame';
import type { DbNotify } from './notify/DbNotify';
import type { DbRankInfo } from './rank/DbRankInfo';
import type { DbRankPrize } from './rank/DbRankPrize';
import type { DbTaskInfo } from './task/DbTaskInfo';
import type { DbUserAccount } from './user/DbUserAccount';
import type { DbUserAccountHistory } from './user/DbUserAccountHistory';
import type { DbUserInfo } from './user/DbUserInfo';
import type { DbUserLoginLog } from './user/DbUserLoginLog';
import type { DbUserPrizeHistory } from './user/DbUserPrizeHistory';
import { DbTaskDetail } from './task/DbTaskDetail';
import { DbTaskUserReceive } from './task/DbTaskUserReceive';
import { DbTaskUserReport } from './task/DbTaskUserReport';
import { DbTaskUserReward } from './task/DbTaskUserReward';
import { DbFruitInviteConfig } from './fruitDraw/DbFruitInviteConfig';
import { DbFruitDrawLog } from './fruitDraw/DbFruitDrawLog';
import { DbGameUserRecord } from './game/DbGameUserRecord';
import { DbRankUserRecord } from './rank/DbRankUserRecord';
import { DbLotteryLog } from './lottery/DbLotteryLog';

export interface CollectionDbType {
  AdminUser: DbAdminUser;
  Achievement: DbAchievement;
  AdminLoginError: DbAdminLoginError;
  AdminLoginLog: DbAdminLoginLog;
  ActivityInfo: DbActivityInfo;
  LotteryInfo: DbLotteryInfo;
  LotteryPrize: DbLotteryPrize;
  LotteryLog: DbLotteryLog;
  /** 排行榜 */
  RankInfo: DbRankInfo;
  RankPrize: DbRankPrize;
  RankUserRecord: DbRankUserRecord;

  /** 任务 */
  TaskInfo: DbTaskInfo;
  TaskDetail: DbTaskDetail;
  TaskUserReport: DbTaskUserReport;
  TaskUserReward: DbTaskUserReward;

  TaskUserReceive: DbTaskUserReceive;
  UserPrizeHistory: DbUserPrizeHistory;
  AdminRole: DbAdminRole;
  FruitGame: DbFruitGame;
  UserAccount: DbUserAccount;
  UserAccountHistory: DbUserAccountHistory;

  /** 兑换模块 */
  ExchangeConfig: DbExchangeConfig;
  ExchangeLog: DbExchangeLog;
  ExchangePrize: DbExchangePrize;

  UserInfo: DbUserInfo;
  UserLoginLog: DbUserLoginLog;
  BagInfo: DbBagInfo;

  /** 通知 */
  Notify: DbNotify;
  /** 水果机抽奖奖品 */
  FruitDrawPrize: DbFruitDrawPrize;
  /** 水果机合成奖品 */
  FruitComposePrize: DbFruitComposePrize;
  // 水果机拉新配置
  FruitInviteConfig: DbFruitInviteConfig;
  // 水果机抽奖记录
  FruitDrawLog: DbFruitDrawLog;

  // 积分游戏
  GameUserRecord: DbGameUserRecord;
}
