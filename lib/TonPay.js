"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TonPay = void 0;
const tonweb_1 = __importDefault(require("tonweb"));
const config_1 = __importDefault(require("../config"));
class TonPay {
    // 检查支付状态的函数
    static async checkPayment(orderId, expectedAmount) {
        const walletAddress = config_1.default.ton_token;
        try {
            // 查询商家钱包的最近交易记录
            const transactions = await new tonweb_1.default().provider.getTransactions(walletAddress);
            for (const tx of transactions) {
                const txAmount = Number(tx.in_msg.value); // 接收金额（单位为 nanoton）
                const txMessage = tx.in_msg.message || ''; // 可选的支付备注
                // 检查金额和订单备注
                if (txAmount === expectedAmount && txMessage.includes(orderId)) {
                    console.log(`支付成功！订单号: ${orderId}, 金额: ${txAmount / 1e9} TON`);
                    return true;
                }
            }
            console.log(`未找到匹配的支付记录，订单号: ${orderId}`);
            return false;
        }
        catch (error) {
            console.error('检查支付状态时出错:', error);
            return false;
        }
    }
}
exports.TonPay = TonPay;
