import { ServiceProto } from 'tsrpc-proto';
import { ReqGetActivity, ResGetActivity } from './m/activity/PtlGetActivity';
import { ReqGetBagList, ResGetBagList } from './m/bag/PtlGetBagList';
import { ReqExchangePrize, ResExchangePrize } from './m/exchange/PtlExchangePrize';
import { ReqGetConfig, ResGetConfig } from './m/exchange/PtlGetConfig';
import { ReqGetPrizeList, ResGetPrizeList } from './m/exchange/PtlGetPrizeList';
import { ReqCompose, ResCompose } from './m/fruitDraw/PtlCompose';
import { ReqDraw, ResDraw } from './m/fruitDraw/PtlDraw';
import { ReqGetPrizeList as ReqGetPrizeList_1, ResGetPrizeList as ResGetPrizeList_1 } from './m/fruitDraw/PtlGetPrizeList';
import { ReqEnd, ResEnd } from './m/game/PtlEnd';
import { ReqInit, ResInit } from './m/game/PtlInit';
import { ReqStart, ResStart } from './m/game/PtlStart';
import { ReqTgUserLogin, ResTgUserLogin } from './m/login/PtlTgUserLogin';
import { ReqTokenLogin, ResTokenLogin } from './m/login/PtlTokenLogin';
import { ReqLottery, ResLottery } from './m/lottery/PtlLottery';
import { ReqLotteryList, ResLotteryList } from './m/lottery/PtlLotteryList';
import { ReqLotteryPrizeList, ResLotteryPrizeList } from './m/lottery/PtlLotteryPrizeList';
import { ReqGetNotifyList, ResGetNotifyList } from './m/notify/PtlGetNotifyList';
import { ReqGetRankInfo, ResGetRankInfo } from './m/rank/PtlGetRankInfo';
import { ReqGetRankList, ResGetRankList } from './m/rank/PtlGetRankList';
import { ReqGetRankPrizeList, ResGetRankPrizeList } from './m/rank/PtlGetRankPrizeList';
import { ReqGetUserRankList, ResGetUserRankList } from './m/rank/PtlGetUserRankList';
import { ReqGetTask, ResGetTask } from './m/task/PtlGetTask';
import { ReqGetTaskList, ResGetTaskList } from './m/task/PtlGetTaskList';
import { ReqTaskUserReceive, ResTaskUserReceive } from './m/task/PtlTaskUserReceive';
import { ReqTaskUserReport, ResTaskUserReport } from './m/task/PtlTaskUserReport';
import { ReqTaskUserReward, ResTaskUserReward } from './m/task/PtlTaskUserReward';
import { ReqGetUserAccountHistory, ResGetUserAccountHistory } from './m/user/PtlGetUserAccountHistory';
import { ReqGetUserInfo, ResGetUserInfo } from './m/user/PtlGetUserInfo';

export interface ServiceType {
    api: {
        "m/activity/GetActivity": {
            req: ReqGetActivity,
            res: ResGetActivity
        },
        "m/bag/GetBagList": {
            req: ReqGetBagList,
            res: ResGetBagList
        },
        "m/exchange/ExchangePrize": {
            req: ReqExchangePrize,
            res: ResExchangePrize
        },
        "m/exchange/GetConfig": {
            req: ReqGetConfig,
            res: ResGetConfig
        },
        "m/exchange/GetPrizeList": {
            req: ReqGetPrizeList,
            res: ResGetPrizeList
        },
        "m/fruitDraw/Compose": {
            req: ReqCompose,
            res: ResCompose
        },
        "m/fruitDraw/Draw": {
            req: ReqDraw,
            res: ResDraw
        },
        "m/fruitDraw/GetPrizeList": {
            req: ReqGetPrizeList_1,
            res: ResGetPrizeList_1
        },
        "m/game/End": {
            req: ReqEnd,
            res: ResEnd
        },
        "m/game/Init": {
            req: ReqInit,
            res: ResInit
        },
        "m/game/Start": {
            req: ReqStart,
            res: ResStart
        },
        "m/login/TgUserLogin": {
            req: ReqTgUserLogin,
            res: ResTgUserLogin
        },
        "m/login/TokenLogin": {
            req: ReqTokenLogin,
            res: ResTokenLogin
        },
        "m/lottery/Lottery": {
            req: ReqLottery,
            res: ResLottery
        },
        "m/lottery/LotteryList": {
            req: ReqLotteryList,
            res: ResLotteryList
        },
        "m/lottery/LotteryPrizeList": {
            req: ReqLotteryPrizeList,
            res: ResLotteryPrizeList
        },
        "m/notify/GetNotifyList": {
            req: ReqGetNotifyList,
            res: ResGetNotifyList
        },
        "m/rank/GetRankInfo": {
            req: ReqGetRankInfo,
            res: ResGetRankInfo
        },
        "m/rank/GetRankList": {
            req: ReqGetRankList,
            res: ResGetRankList
        },
        "m/rank/GetRankPrizeList": {
            req: ReqGetRankPrizeList,
            res: ResGetRankPrizeList
        },
        "m/rank/GetUserRankList": {
            req: ReqGetUserRankList,
            res: ResGetUserRankList
        },
        "m/task/GetTask": {
            req: ReqGetTask,
            res: ResGetTask
        },
        "m/task/GetTaskList": {
            req: ReqGetTaskList,
            res: ResGetTaskList
        },
        "m/task/TaskUserReceive": {
            req: ReqTaskUserReceive,
            res: ResTaskUserReceive
        },
        "m/task/TaskUserReport": {
            req: ReqTaskUserReport,
            res: ResTaskUserReport
        },
        "m/task/TaskUserReward": {
            req: ReqTaskUserReward,
            res: ResTaskUserReward
        },
        "m/user/GetUserAccountHistory": {
            req: ReqGetUserAccountHistory,
            res: ResGetUserAccountHistory
        },
        "m/user/GetUserInfo": {
            req: ReqGetUserInfo,
            res: ResGetUserInfo
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 73,
    "services": [
        {
            "id": 51,
            "name": "m/activity/GetActivity",
            "type": "api",
            "conf": {
                "needLogin": false
            }
        },
        {
            "id": 35,
            "name": "m/bag/GetBagList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 30,
            "name": "m/exchange/ExchangePrize",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 49,
            "name": "m/exchange/GetConfig",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 31,
            "name": "m/exchange/GetPrizeList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 60,
            "name": "m/fruitDraw/Compose",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 59,
            "name": "m/fruitDraw/Draw",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 58,
            "name": "m/fruitDraw/GetPrizeList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 61,
            "name": "m/game/End",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 62,
            "name": "m/game/Init",
            "type": "api",
            "conf": {
                "needLogin": false
            }
        },
        {
            "id": 63,
            "name": "m/game/Start",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 64,
            "name": "m/login/TgUserLogin",
            "type": "api",
            "conf": {
                "needLogin": false
            }
        },
        {
            "id": 25,
            "name": "m/login/TokenLogin",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 72,
            "name": "m/lottery/Lottery",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 73,
            "name": "m/lottery/LotteryList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 74,
            "name": "m/lottery/LotteryPrizeList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 52,
            "name": "m/notify/GetNotifyList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 65,
            "name": "m/rank/GetRankInfo",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 66,
            "name": "m/rank/GetRankList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 67,
            "name": "m/rank/GetRankPrizeList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 68,
            "name": "m/rank/GetUserRankList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 56,
            "name": "m/task/GetTask",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 53,
            "name": "m/task/GetTaskList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 57,
            "name": "m/task/TaskUserReceive",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 54,
            "name": "m/task/TaskUserReport",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 55,
            "name": "m/task/TaskUserReward",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 48,
            "name": "m/user/GetUserAccountHistory",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 37,
            "name": "m/user/GetUserInfo",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        }
    ],
    "types": {
        "m/activity/PtlGetActivity/ReqGetActivity": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "Base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "device",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "m/activity/PtlGetActivity/ResGetActivity": {
            "type": "Intersection",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../dbItems/activity/DbActivityInfo/DbActivityInfo"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "status",
                                "type": {
                                    "type": "Reference",
                                    "target": "../constant/ActivityStatus/ActivityStatus"
                                }
                            },
                            {
                                "id": 1,
                                "name": "statusText",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "Base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../dbItems/activity/DbActivityInfo/DbActivityInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../common/CommonField/CommonField"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "activityName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "activityCover",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "activityContent",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "activityDateStartDate",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "activityDateEndDate",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "shareImage",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "shareTitle",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../common/CommonField/CommonField": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "isRemoved",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "isEnabled",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "create",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "admin",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "adminId",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "nickname",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "update",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "admin",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "adminId",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "nickname",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "../constant/ActivityStatus/ActivityStatus": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "NOT_STARTED"
                },
                {
                    "id": 1,
                    "value": "OPENING"
                },
                {
                    "id": 2,
                    "value": "FINISHED"
                },
                {
                    "id": 3,
                    "value": "OFFLINE"
                }
            ]
        },
        "m/bag/PtlGetBagList/ReqGetBagList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/bag/PtlGetBagList/ResGetBagList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "bagList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "bagId",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "prize",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "name",
                                                "type": {
                                                    "type": "String"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "pic",
                                                "type": {
                                                    "type": "String"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "name": "price",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "status",
                                    "type": {
                                        "type": "Union",
                                        "members": [
                                            {
                                                "id": 0,
                                                "type": {
                                                    "type": "Reference",
                                                    "target": "../constant/BagPrizeStatus/EBagPrizeStatus"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "type": {
                                                    "type": "Reference",
                                                    "target": "../constant/ExpressStatus/EExpressStatus"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "createDate",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "expressInfo",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "expressNumber",
                                                "type": {
                                                    "type": "String"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "expressName",
                                                "type": {
                                                    "type": "String"
                                                }
                                            }
                                        ]
                                    },
                                    "optional": true
                                },
                                {
                                    "id": 5,
                                    "name": "addressId",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "../constant/BagPrizeStatus/EBagPrizeStatus": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "unApply"
                }
            ]
        },
        "../constant/ExpressStatus/EExpressStatus": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "wait"
                },
                {
                    "id": 1,
                    "value": "sent"
                },
                {
                    "id": 2,
                    "value": "stop"
                }
            ]
        },
        "m/exchange/PtlExchangePrize/ReqExchangePrize": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 3,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "accountType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/AccountType/AccountType"
                    }
                },
                {
                    "id": 0,
                    "name": "exchangeId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../constant/AccountType/AccountType": {
            "type": "Enum",
            "members": [
                {
                    "id": 2,
                    "value": "POINT"
                },
                {
                    "id": 3,
                    "value": "TIMES"
                }
            ]
        },
        "m/exchange/PtlExchangePrize/ResExchangePrize": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "amount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "m/exchange/PtlGetConfig/ReqGetConfig": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "accountType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/AccountType/AccountType"
                    }
                }
            ]
        },
        "m/exchange/PtlGetConfig/ResGetConfig": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "config",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../dbItems/exchange/DbExchangeConfig/DbExchangeConfig"
                        },
                        "keys": [
                            "_id"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 1,
                    "name": "amount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../dbItems/exchange/DbExchangeConfig/DbExchangeConfig": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../common/CommonField/CommonField"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "pointName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "pointImage",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "pointExchangeValue",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "rule",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/exchange/PtlGetPrizeList/ReqGetPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 2,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "accountType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/AccountType/AccountType"
                    }
                }
            ]
        },
        "m/exchange/PtlGetPrizeList/ResGetPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 1,
                    "name": "config",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../dbItems/exchange/DbExchangeConfig/DbExchangeConfig"
                        },
                        "keys": [
                            "_id"
                        ],
                        "type": "Omit"
                    }
                },
                {
                    "id": 2,
                    "name": "amount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 0,
                    "name": "prizeList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Intersection",
                            "members": [
                                {
                                    "id": 0,
                                    "type": {
                                        "type": "Reference",
                                        "target": "../common/PrizeField/PrizeField"
                                    }
                                },
                                {
                                    "id": 5,
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "exchangeId",
                                                "type": {
                                                    "type": "String"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "prizeStock",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "name": "updateStockTime",
                                                "type": {
                                                    "type": "Number"
                                                },
                                                "optional": true
                                            },
                                            {
                                                "id": 3,
                                                "name": "enableTime",
                                                "type": {
                                                    "type": "Number"
                                                },
                                                "optional": true
                                            },
                                            {
                                                "id": 4,
                                                "name": "exchangePrizeStatus",
                                                "type": {
                                                    "type": "Reference",
                                                    "target": "../constant/ExchangeType/EExchangePrizeStatus"
                                                }
                                            },
                                            {
                                                "id": 5,
                                                "name": "needAmount",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "../common/PrizeField/PrizeField": {
            "type": "Interface",
            "properties": [
                {
                    "id": 6,
                    "name": "prizeType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/PrizeType/PrizeType"
                    }
                },
                {
                    "id": 7,
                    "name": "rewardCount",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "prizeName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 9,
                    "name": "prizePicture",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 10,
                    "name": "prizePrice",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../constant/PrizeType/PrizeType": {
            "type": "Enum",
            "members": [
                {
                    "id": 3,
                    "value": "POINT"
                }
            ]
        },
        "../constant/ExchangeType/EExchangePrizeStatus": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "default"
                },
                {
                    "id": 1,
                    "value": "outOfStock"
                },
                {
                    "id": 2,
                    "value": "exchanged"
                }
            ]
        },
        "m/fruitDraw/PtlCompose/ReqCompose": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/fruitDraw/PtlCompose/ResCompose": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ]
        },
        "m/fruitDraw/PtlDraw/ReqDraw": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ]
        },
        "m/fruitDraw/PtlDraw/ResDraw": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 3,
                    "name": "drawNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "todayDrawNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "prizeList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "m/fruitDraw/PtlDraw/TPrizeListItem"
                        }
                    }
                }
            ]
        },
        "m/fruitDraw/PtlDraw/TPrizeListItem": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "m/fruitDraw/PtlDraw/IBasicPrize"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "m/fruitDraw/PtlDraw/ICollectPrize"
                    }
                }
            ]
        },
        "m/fruitDraw/PtlDraw/IBasicPrize": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "moduleType",
                    "type": {
                        "type": "Literal",
                        "literal": "basic"
                    }
                },
                {
                    "id": 1,
                    "name": "prizeId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "prizeName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "prizePic",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "prizeType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "prizePrice",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/fruitDraw/PtlDraw/ICollectPrize": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "moduleType",
                    "type": {
                        "type": "Literal",
                        "literal": "collect"
                    }
                },
                {
                    "id": 1,
                    "name": "prizeId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "prizeName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "prizePrice",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/fruitDraw/PtlGetPrizeList/ReqGetPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/fruitDraw/PtlGetPrizeList/ResGetPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "basicPrize",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "m/fruitDraw/PtlGetPrizeList/IPrizeItem"
                        }
                    }
                }
            ]
        },
        "m/fruitDraw/PtlGetPrizeList/IPrizeItem": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "prizeId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "prizeName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "prizePic",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "prizePrice",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/game/PtlEnd/ReqEnd": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "recordId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "value",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "extData",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "m/game/PtlEnd/ResEnd": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "totalValue",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "m/game/PtlInit/ReqInit": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ]
        },
        "m/game/PtlInit/ResInit": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "loading",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "activity",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "cover",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "m/game/PtlStart/ReqStart": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ]
        },
        "m/game/PtlStart/ResStart": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "recordId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/login/PtlTgUserLogin/ReqTgUserLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 1,
                    "name": "initData",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/login/PtlTgUserLogin/ResTgUserLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "userInfo",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "uid",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "nickname",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "avatar",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "m/login/PtlTokenLogin/ReqTokenLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "needUserInfo",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "m/login/PtlTokenLogin/ResTokenLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "userInfo",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 3,
                                "name": "uid",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "nickname",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "avatar",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "m/lottery/PtlLottery/ReqLottery": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "lotteryInfoId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "m/lottery/PtlLottery/ResLottery": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "drawNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "todayDrawNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "prizeInfo",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "prizeId",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "prizeName",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "prizePic",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 3,
                                "name": "prizeType",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 4,
                                "name": "prizePrice",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "m/lottery/PtlLotteryList/ReqLotteryList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "current",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "pageSize",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "m/lottery/PtlLotteryList/ResLotteryList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "lotteryInfoId",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "startDateStr",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "endDateStr",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "statusName",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "m/lottery/PtlLotteryPrizeList/ReqLotteryPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "lotteryInfoId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/lottery/PtlLotteryPrizeList/ResLotteryPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../common/PrizeField/PrizeField"
                        }
                    }
                }
            ]
        },
        "m/notify/PtlGetNotifyList/ReqGetNotifyList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ]
        },
        "m/notify/PtlGetNotifyList/ResGetNotifyList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../dbItems/notify/DbNotify/DbNotify"
                        }
                    }
                }
            ]
        },
        "../dbItems/notify/DbNotify/DbNotify": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../common/CommonField/CommonField"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "notifyUserType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/NotifyUserType/NotifyUserType"
                    }
                },
                {
                    "id": 2,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "notifyStyle",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "notifyStyleType",
                                            "type": {
                                                "type": "Literal",
                                                "literal": "TEXT"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "notifyText",
                                            "type": {
                                                "type": "String"
                                            },
                                            "optional": true
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "notifyStyleType",
                                            "type": {
                                                "type": "Literal",
                                                "literal": "IMAGE"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "notifyImage",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 4,
                    "name": "notifyButton",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "hasNotifyButton",
                                            "type": {
                                                "type": "Literal",
                                                "literal": false
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "hasNotifyButton",
                                            "type": {
                                                "type": "Literal",
                                                "literal": true
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "notifyButtonText",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "notifyJump",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "isJump",
                                            "type": {
                                                "type": "Literal",
                                                "literal": false
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "isJump",
                                            "type": {
                                                "type": "Literal",
                                                "literal": true
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "jumpPath",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "name": "startTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "endTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "notifyShowFrequencyType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/NotifyShowFrequencyType/NotifyShowFrequencyType"
                    }
                }
            ]
        },
        "../constant/NotifyUserType/NotifyUserType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "ALL"
                },
                {
                    "id": 1,
                    "value": "NEW"
                }
            ]
        },
        "../constant/NotifyDialogStyleType/NotifyDialogStyleType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "TEXT"
                },
                {
                    "id": 1,
                    "value": "IMAGE"
                }
            ]
        },
        "../constant/NotifyShowFrequencyType/NotifyShowFrequencyType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "ONLY_ONE"
                },
                {
                    "id": 1,
                    "value": "EVERY_DAY"
                },
                {
                    "id": 2,
                    "value": "EVERY_TIME"
                }
            ]
        },
        "m/rank/PtlGetRankInfo/ReqGetRankInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "rankInfoId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/rank/PtlGetRankInfo/ResGetRankInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "rankInfo",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "rankInfoId",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "startDateStr",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "endDateStr",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "name": "statusName",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "name": "prizeList",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Reference",
                                        "target": "../dbItems/rank/DbRankPrize/DbRankPrize"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../dbItems/rank/DbRankPrize/DbRankPrize": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../common/CommonField/CommonField"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "rankInfoId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "minRank",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "maxRank",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "prizeInfo",
                    "type": {
                        "type": "Reference",
                        "target": "../common/PrizeField/PrizeField"
                    }
                }
            ]
        },
        "m/rank/PtlGetRankList/ReqGetRankList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "current",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "pageSize",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "m/rank/PtlGetRankList/ResGetRankList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "rankInfoId",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "startDateStr",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "endDateStr",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "statusName",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "m/rank/PtlGetRankPrizeList/ReqGetRankPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "rankInfoId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/rank/PtlGetRankPrizeList/ResGetRankPrizeList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../dbItems/rank/DbRankPrize/DbRankPrize"
                        }
                    }
                }
            ]
        },
        "m/rank/PtlGetUserRankList/ReqGetUserRankList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "rankInfoId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "current",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "pageSize",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "m/rank/PtlGetUserRankList/ResGetUserRankList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "uid",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "nickname",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "avatar",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "rankNo",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "value",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 5,
                                    "name": "prize",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../common/PrizeField/PrizeField"
                                    },
                                    "optional": true
                                },
                                {
                                    "id": 6,
                                    "name": "received",
                                    "type": {
                                        "type": "Boolean"
                                    }
                                },
                                {
                                    "id": 7,
                                    "name": "receivedDate",
                                    "type": {
                                        "type": "Number"
                                    },
                                    "optional": true
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "m/task/PtlGetTask/ReqGetTask": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "taskId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/task/PtlGetTask/ResGetTask": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "taskId",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "autoReceive",
                                "type": {
                                    "type": "Boolean"
                                }
                            },
                            {
                                "id": 2,
                                "name": "autoActive",
                                "type": {
                                    "type": "Boolean"
                                }
                            },
                            {
                                "id": 3,
                                "name": "taskProgress",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "taskState",
                                            "type": {
                                                "type": "Reference",
                                                "target": "../constant/task/TaskType/ETaskState"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "progressIndex",
                                            "type": {
                                                "type": "Number"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "completeValue",
                                            "type": {
                                                "type": "Number"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 4,
                                "name": "basicInfo",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "title",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "describe",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "icon",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "name": "reward",
                                            "type": {
                                                "type": "Array",
                                                "elementType": {
                                                    "type": "Reference",
                                                    "target": "../constant/task/TaskConfig./IRewardItem"
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 5,
                                "name": "detailInfo",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Reference",
                                        "target": "../constant/task/Interface/ITaskContentInfo"
                                    }
                                }
                            },
                            {
                                "id": 6,
                                "name": "taskLife",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "refreshType",
                                            "type": {
                                                "type": "Reference",
                                                "target": "../constant/task/TaskRefreshType/ETaskRefreshType"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "showTime",
                                            "type": {
                                                "type": "Tuple",
                                                "elementTypes": [
                                                    {
                                                        "type": "Number"
                                                    },
                                                    {
                                                        "type": "Number"
                                                    }
                                                ]
                                            },
                                            "optional": true
                                        },
                                        {
                                            "id": 2,
                                            "name": "enableTime",
                                            "type": {
                                                "type": "Tuple",
                                                "elementTypes": [
                                                    {
                                                        "type": "Number"
                                                    },
                                                    {
                                                        "type": "Number"
                                                    }
                                                ]
                                            },
                                            "optional": true
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../constant/task/TaskType/ETaskState": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "unEnable"
                },
                {
                    "id": 1,
                    "value": "unStart"
                },
                {
                    "id": 2,
                    "value": "inTask"
                },
                {
                    "id": 3,
                    "value": "receiveAward"
                },
                {
                    "id": 4,
                    "value": "finished"
                }
            ]
        },
        "../constant/task/TaskConfig./IRewardItem": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "rewardId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "rewardName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "rewardType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "rewardValue",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "rewardPic",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../constant/task/Interface/ITaskContentInfo": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../constant/task/Interface/ITaskDialogInfo"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../constant/task/Interface/ITaskOperateInfo"
                    }
                }
            ]
        },
        "../constant/task/Interface/ITaskDialogInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../constant/task/Interface/ITaskDetailBaseInfo"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "taskType",
                    "type": {
                        "type": "Literal",
                        "literal": "dialog"
                    }
                },
                {
                    "id": 1,
                    "name": "dialogList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "targetType",
                                    "type": {
                                        "type": "Union",
                                        "members": [
                                            {
                                                "id": 0,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "npc"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "myself"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "none"
                                                }
                                            }
                                        ]
                                    },
                                    "optional": true
                                },
                                {
                                    "id": 1,
                                    "name": "targetId",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                },
                                {
                                    "id": 2,
                                    "name": "text",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "../constant/task/Interface/ITaskDetailBaseInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "triggerType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/task/TaskConfig./ETriggerType"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "triggerId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../constant/task/TaskConfig./ETriggerType": {
            "type": "Enum",
            "members": [
                {
                    "id": 3,
                    "value": "none"
                },
                {
                    "id": 0,
                    "value": "npc"
                },
                {
                    "id": 1,
                    "value": "landmark"
                },
                {
                    "id": 2,
                    "value": "area"
                }
            ]
        },
        "../constant/task/TaskType/ETaskType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "dialog"
                },
                {
                    "id": 1,
                    "value": "operate"
                }
            ]
        },
        "../constant/task/Interface/ITaskOperateInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../constant/task/Interface/ITaskDetailBaseInfo"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "taskType",
                    "type": {
                        "type": "Literal",
                        "literal": "operate"
                    }
                },
                {
                    "id": 1,
                    "name": "operateType",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "operateValue",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "operateTarget",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../constant/task/TaskRefreshType/ETaskRefreshType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "always"
                },
                {
                    "id": 1,
                    "value": "daily"
                },
                {
                    "id": 2,
                    "value": "once"
                },
                {
                    "id": 3,
                    "value": "weekly"
                },
                {
                    "id": 4,
                    "value": "monthly"
                },
                {
                    "id": 5,
                    "value": "yearly"
                }
            ]
        },
        "m/task/PtlGetTaskList/ReqGetTaskList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/task/PtlGetTaskList/ResGetTaskList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 1,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "taskId",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "autoReceive",
                                    "type": {
                                        "type": "Boolean"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "autoActive",
                                    "type": {
                                        "type": "Boolean"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "taskProgress",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "taskState",
                                                "type": {
                                                    "type": "Reference",
                                                    "target": "../constant/task/TaskType/ETaskState"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "progressIndex",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "name": "completeValue",
                                                "type": {
                                                    "type": "Number"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "basicInfo",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "title",
                                                "type": {
                                                    "type": "String"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "describe",
                                                "type": {
                                                    "type": "String"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "name": "icon",
                                                "type": {
                                                    "type": "String"
                                                }
                                            },
                                            {
                                                "id": 3,
                                                "name": "reward",
                                                "type": {
                                                    "type": "Array",
                                                    "elementType": {
                                                        "type": "Reference",
                                                        "target": "../constant/task/TaskConfig./IRewardItem"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 5,
                                    "name": "detailInfo",
                                    "type": {
                                        "type": "Array",
                                        "elementType": {
                                            "type": "Reference",
                                            "target": "../constant/task/Interface/ITaskContentInfo"
                                        }
                                    }
                                },
                                {
                                    "id": 6,
                                    "name": "taskLife",
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "refreshType",
                                                "type": {
                                                    "type": "Reference",
                                                    "target": "../constant/task/TaskRefreshType/ETaskRefreshType"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "name": "showTime",
                                                "type": {
                                                    "type": "Tuple",
                                                    "elementTypes": [
                                                        {
                                                            "type": "Number"
                                                        },
                                                        {
                                                            "type": "Number"
                                                        }
                                                    ]
                                                },
                                                "optional": true
                                            },
                                            {
                                                "id": 2,
                                                "name": "enableTime",
                                                "type": {
                                                    "type": "Tuple",
                                                    "elementTypes": [
                                                        {
                                                            "type": "Number"
                                                        },
                                                        {
                                                            "type": "Number"
                                                        }
                                                    ]
                                                },
                                                "optional": true
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "m/task/PtlTaskUserReceive/ReqTaskUserReceive": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "taskId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/task/PtlTaskUserReceive/ResTaskUserReceive": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "taskProgress",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "taskState",
                                "type": {
                                    "type": "Reference",
                                    "target": "../constant/task/TaskType/ETaskState"
                                }
                            },
                            {
                                "id": 1,
                                "name": "progressIndex",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "completeValue",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "m/task/PtlTaskUserReport/ReqTaskUserReport": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "taskId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "data",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "index",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "value",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "m/task/PtlTaskUserReport/ResTaskUserReport": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 1,
                    "name": "taskProgress",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "taskState",
                                "type": {
                                    "type": "Reference",
                                    "target": "../constant/task/TaskType/ETaskState"
                                }
                            },
                            {
                                "id": 1,
                                "name": "progressIndex",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "completeValue",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "m/task/PtlTaskUserReward/ReqTaskUserReward": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "taskId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "m/task/PtlTaskUserReward/ResTaskUserReward": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "taskProgress",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "taskState",
                                "type": {
                                    "type": "Reference",
                                    "target": "../constant/task/TaskType/ETaskState"
                                }
                            },
                            {
                                "id": 1,
                                "name": "progressIndex",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "completeValue",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "reward",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../constant/task/TaskConfig./IRewardItem"
                        }
                    }
                }
            ]
        },
        "m/user/PtlGetUserAccountHistory/ReqGetUserAccountHistory": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BasePageRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "accountType",
                    "type": {
                        "type": "Reference",
                        "target": "../constant/AccountType/AccountType"
                    }
                }
            ]
        },
        "Base/BasePageRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pageSize",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "pageNumber",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "m/user/PtlGetUserAccountHistory/ResGetUserAccountHistory": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BasePageResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "amount",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "createTime",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "tips",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "Base/BasePageResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "totalPage",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "pageNumber",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "m/user/PtlGetUserInfo/ReqGetUserInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseRequest"
                    }
                }
            ]
        },
        "m/user/PtlGetUserInfo/ResGetUserInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "Base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userInfo",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 2,
                                "name": "uid",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 0,
                                "name": "nickname",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "avatar",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
};