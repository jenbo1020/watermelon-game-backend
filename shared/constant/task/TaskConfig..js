"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardList = exports.OperateTargetList = exports.OperateTypeList = exports.TriggerList = exports.AreaList = exports.LandmarkList = exports.NpcList = exports.TriggerTypeList = exports.TriggerTypeName = exports.ETriggerType = void 0;
/**  触发类型 */
var ETriggerType;
(function (ETriggerType) {
    /** 无 */
    ETriggerType["none"] = "none";
    /** NPC */
    ETriggerType["npc"] = "npc";
    /** 地标点 */
    ETriggerType["landmark"] = "landmark";
    /** 区域 */
    ETriggerType["area"] = "area";
})(ETriggerType = exports.ETriggerType || (exports.ETriggerType = {}));
/**  触发类型名称 */
exports.TriggerTypeName = {
    /** NPC */
    npc: 'NPC',
    /** 地标点 */
    landmark: '地标点',
    /** 区域 */
    area: '区域',
};
exports.TriggerTypeList = [
    {
        type: ETriggerType.npc,
        name: exports.TriggerTypeName.npc,
    },
    {
        type: ETriggerType.landmark,
        name: exports.TriggerTypeName.landmark,
    },
    {
        type: ETriggerType.area,
        name: exports.TriggerTypeName.area,
    },
];
/** NPC信息列表 */
exports.NpcList = [
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
exports.LandmarkList = [
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
exports.AreaList = [
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
/** 触发类型及列表 */
exports.TriggerList = [
    {
        triggerType: ETriggerType.npc,
        triggerTypeName: exports.TriggerTypeName.npc,
        list: exports.NpcList,
    },
    {
        triggerType: ETriggerType.landmark,
        triggerTypeName: exports.TriggerTypeName.landmark,
        list: exports.LandmarkList,
    },
    {
        triggerType: ETriggerType.area,
        triggerTypeName: exports.TriggerTypeName.area,
        list: exports.AreaList,
    },
];
/** 操作类型列表 */
exports.OperateTypeList = [
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
/** 操作目标列表 */
exports.OperateTargetList = [
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
/** 任务奖励列表 */
exports.RewardList = [
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
