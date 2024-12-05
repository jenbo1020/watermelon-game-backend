"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    // const now = new Date().valueOf();
    // 取出本时间段内的活动配置
    // const filter = {
    //     activityDateStartDate: { $lte: now },
    //     activityDateEndDate: { $gte: now }
    // }
    // const list = await Global.collection('ActivityInfo').find(filter).toArray();
    // const activity = list.map(item => {
    //     return {
    //         cover: item.activityCover,
    //         name: item.activityName,
    //         content: item.activityContent
    //     }
    // });
    // call.succ({
    //     loading: "",
    //     activity
    // })
    const data = {
        // 启动页
        loadingPage: {
            // 活动卡片
            activeCard: "https://d2h6lhn2iwtzyf.cloudfront.net/fruit_res/images/loadingAds.png",
        },
        // 首页
        mainPage: {
            // 首页广告
            ads: "https://d2h6lhn2iwtzyf.cloudfront.net/fruit_res/images/loadingAds.png",
            // 活动奖励目标积分(前三名)
            activeAwardScores: [
                {
                    icon: "https://d2h6lhn2iwtzyf.cloudfront.net/fruit_res/images/loadingAds.png",
                    score: 1500,
                },
                {
                    icon: "https://d2h6lhn2iwtzyf.cloudfront.net/fruit_res/images/loadingAds.png",
                    score: 850,
                },
                {
                    icon: "https://d2h6lhn2iwtzyf.cloudfront.net/fruit_res/images/loadingAds.png",
                    score: 800,
                },
            ],
        },
        // 购买或分享配置
        buttonConfig: {
            "reviveBtn": {
                "btnType": "share",
                "priceInfo": {
                    "price": 2,
                    "nowPrice": 0.2
                }
            },
            "gameOverBtn": {
                "btnType": "buy",
                "priceInfo": {
                    "price": 2,
                    "nowPrice": 0.2
                }
            },
            "gameProp_1": {
                "btnType": "buy",
                "priceInfo": {
                    "price": 2,
                    "nowPrice": 0.2
                }
            },
            "gameProp_2": {
                "btnType": "buy",
                "priceInfo": {
                    "price": 2,
                    "nowPrice": 0.2
                }
            },
            "gameProp_3": {
                "btnType": "buy",
                "priceInfo": {
                    "price": 2,
                    "nowPrice": 0.2
                }
            },
            "gameProp_4": {
                "btnType": "buy",
                "priceInfo": {
                    "price": 2,
                    "nowPrice": 0.2
                }
            },
        },
        drawConfig: {
            moneyGet: 2, // 体现金额
        }
    };
    // 取出游戏道具配置
    const gameProps = await Global_1.Global.collection('GamePropsConfig').findOne({}, { projection: { reviveBtn: 1, gameOverBtn: 1, gameProp_1: 1, gameProp_2: 1, gameProp_3: 1, gameProp_4: 1 } });
    if (gameProps) {
        data.buttonConfig = gameProps;
    }
    call.succ(data);
}
exports.default = default_1;
