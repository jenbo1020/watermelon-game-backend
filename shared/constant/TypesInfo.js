"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EQuestionType = exports.ESmsType = exports.ERoomState = exports.EAccountType = exports.ELoginType = void 0;
/** 登录类型 */
var ELoginType;
(function (ELoginType) {
    /** telegram用户 */
    ELoginType["TgUser"] = "TgUser";
    /** Token登录 */
    ELoginType["Token"] = "token";
})(ELoginType = exports.ELoginType || (exports.ELoginType = {}));
/** 帐号类型 */
var EAccountType;
(function (EAccountType) {
    /** 正式用户 */
    EAccountType["Official"] = "official";
    /** 游客 */
    EAccountType["Guest"] = "guest";
})(EAccountType = exports.EAccountType || (exports.EAccountType = {}));
/** 房间状态 */
var ERoomState;
(function (ERoomState) {
    ERoomState["open"] = "open";
    ERoomState["close"] = "close";
})(ERoomState = exports.ERoomState || (exports.ERoomState = {}));
/** 短信类型 */
var ESmsType;
(function (ESmsType) {
    ESmsType["login"] = "login";
    ESmsType["resetPassword"] = "resetPassword";
})(ESmsType = exports.ESmsType || (exports.ESmsType = {}));
/** 问题类型 */
var EQuestionType;
(function (EQuestionType) {
    /** 提问 */
    EQuestionType["QA"] = "QA";
    /** 猜问 */
    EQuestionType["GUESS"] = "GUESS";
})(EQuestionType = exports.EQuestionType || (exports.EQuestionType = {}));
