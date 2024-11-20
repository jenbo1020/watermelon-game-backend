/**  触发类型 */
export enum ETriggerType {
  /** 无 */
  none = 'none',
  /** NPC */
  npc = 'npc',
  /** 地标点 */
  landmark = 'landmark',
  /** 区域 */
  area = 'area',
}
/**  触发类型名称 */
export const TriggerTypeName = {
  /** NPC */
  npc: 'NPC',
  /** 地标点 */
  landmark: '地标点',
  /** 区域 */
  area: '区域',
};

export const TriggerTypeList = [
  {
    type: ETriggerType.npc,
    name: TriggerTypeName.npc,
  },
  {
    type: ETriggerType.landmark,
    name: TriggerTypeName.landmark,
  },
  {
    type: ETriggerType.area,
    name: TriggerTypeName.area,
  },
];

/**  触发位置 */
export interface ITriggerItem {
  /** 触发位置id */
  triggerId: string;
  /** 触发位置名称 */
  triggerName: string;
}
/** NPC信息列表 */
export const NpcList: ITriggerItem[] = [
  {
    triggerId: '10001',
    triggerName: 'NPC小胖子',
  },
  {
    triggerId: '10002',
    triggerName: 'NPC小磊子',
  },
  {
    triggerId: '10003',
    triggerName: 'NPC小凯子',
  },
];

/** 地标点信息列表 */
export const LandmarkList: ITriggerItem[] = [
  {
    triggerId: '11001',
    triggerName: '地标1',
  },
  {
    triggerId: '11002',
    triggerName: '地标2',
  },
  {
    triggerId: '11003',
    triggerName: '地标3',
  },
];

/** 地区信息列表 */
export const AreaList: ITriggerItem[] = [
  {
    triggerId: '12001',
    triggerName: '地点1',
  },
  {
    triggerId: '12002',
    triggerName: '地点2',
  },
  {
    triggerId: '12003',
    triggerName: '地点3',
  },
];

/** 操作类型 */
export interface ITriggerTypeItem {
  /** 触发类型 */
  triggerType: ETriggerType;
  /** 触发类型名称 */
  triggerTypeName: string;
  /** 触发类型-位置列表 */
  list: ITriggerItem[];
}
/** 触发类型及列表 */
export const TriggerList: ITriggerTypeItem[] = [
  {
    triggerType: ETriggerType.npc,
    triggerTypeName: TriggerTypeName.npc,
    list: NpcList,
  },
  {
    triggerType: ETriggerType.landmark,
    triggerTypeName: TriggerTypeName.landmark,
    list: LandmarkList,
  },
  {
    triggerType: ETriggerType.area,
    triggerTypeName: TriggerTypeName.area,
    list: AreaList,
  },
];
/** 操作类型 */
/* export enum EOperateType {
  // 加入会员 
  joinMember = 'joinMember',
  // 订阅店铺
  subscribeShop = 'subscribeShop',
  // 收集-商品、工具 
  collect = 'collect',
} */
/** 操作类型-名称 */
/* export const OperateTypeName = {
  joinMember: '入会',
  subscribeShop: '订阅',
  collect: '收集',
} */

/** 操作目标类型 */
/*export enum EOperateTarget {
  //  足球 
  football = 'football',
  // 锤子
  hammer = "hammer",
  // 商品 
  goods = 'goods'
} 
*/

/** 操作目标类型-名称 */
/* export const OperateTargetName = {
  football: '足球',
  hammer: '锤子',
  goods: '商品'
} */
/** 操作类型 */
export interface IOperateTypeItem {
  // 操作类型
  operateType: string;
  // 操作类型名称
  operateTypeName: string;
  // 操作类型值
  operateValue: number;
}

/** 操作类型列表 */
export const OperateTypeList: IOperateTypeItem[] = [
  {
    operateType: 'joinMember',
    operateTypeName: '入会',
    operateValue: 1,
  },
  {
    operateType: 'subscribeShop',
    operateTypeName: '订阅',
    operateValue: 1,
  },
  {
    operateType: 'collect',
    operateTypeName: '收集',
    operateValue: 10,
  },
];
/** 操作目标 */
export interface IOperateTargetItem {
  /** 操作目标类型 */
  operateTarget: string;
  /** 操作目标类型名称 */
  operateTargeName: string;
  /** 操作目标类型对应的id */
  operateTargetIds?: string[];
}

/** 操作目标列表 */
export const OperateTargetList: IOperateTargetItem[] = [
  {
    operateTarget: 'football',
    operateTargeName: '足球',
  },
  {
    operateTarget: 'hammer',
    operateTargeName: '锤子',
  },
  {
    operateTarget: 'goods',
    operateTargeName: '商品',
    operateTargetIds: ['111', '222', '333'],
  },
];

/** 任务奖励 */
export interface IRewardItem {
  /** 奖励的id */
  rewardId: string;
  /** 奖励的名称 */
  rewardName: string;
  /** 奖励的类型 */
  rewardType: string;
  /** 奖励的数量 */
  rewardValue: number;
  /** 奖励的商品图片 */
  rewardPic: string;
}
/** 任务奖励列表 */
export const RewardList: IRewardItem[] = [
  {
    rewardId: 'times001',
    rewardName: '次数',
    rewardType: 'times',
    rewardValue: 1,
    rewardPic: 'https://xiaoailingdong.obs.myhuaweicloud.com/common/images/avatar.png',
  },
  {
    rewardId: 'points001',
    rewardName: '积分',
    rewardType: 'points',
    rewardValue: 100,
    rewardPic: 'https://xiaoailingdong.obs.myhuaweicloud.com/common/images/points.png',
  },
  {
    rewardId: '123432',
    rewardName: '50-1优惠券',
    rewardType: 'coupon',
    rewardValue: 1,
    rewardPic: 'https://xiaoailingdong.obs.myhuaweicloud.com/common/images/hb.png',
  },
];
