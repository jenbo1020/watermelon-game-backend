import { CommonField } from '../../common/CommonField';
import { TFruitDrawInviteConfigItem } from '../../constant/fruitDraw/Interface';

/** 水果机-拉新配置 */
export type DbFruitInviteConfig = CommonField &
  TFruitDrawInviteConfigItem & {
    _id: string;
    /** 所属活动 */
    activityId: string;
    /** 达到的邀请人数 */
    inviteNum: number;
    // 是否可用
    enable: boolean;
    // 修改时间
    updateTime: number;
  };
