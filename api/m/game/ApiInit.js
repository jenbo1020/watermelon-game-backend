"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Global } from "../../../model/Global";
const ButtonType_1 = require("../../../shared/constant/ButtonType");
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
            // 复活按钮
            reviveBtn: {
                btnType: ButtonType_1.EBtnType.share,
                buyPrice: 0.2,
            },
            // 结束按钮
            gameOverBtn: {
                btnType: ButtonType_1.EBtnType.share,
                buyPrice: 0.1,
            },
            // 道具1
            gameProp_1: {
                btnType: ButtonType_1.EBtnType.buy,
                buyPrice: 0.1,
            },
            // 道具2
            gameProp_2: {
                btnType: ButtonType_1.EBtnType.buy,
                buyPrice: 0.1,
            },
            // 道具3
            gameProp_3: {
                btnType: ButtonType_1.EBtnType.buy,
                buyPrice: 0.1,
            },
            // 道具4
            gameProp_4: {
                btnType: ButtonType_1.EBtnType.buy,
                buyPrice: 0.1,
            },
        },
        drawConfig: {
            moneyGet: 2, // 体现金额
        }
    };
    call.succ(data);
}
exports.default = default_1;
