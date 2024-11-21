"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_ERROR = exports.TIMEOUT_ERROR = exports.USER_ERROR = exports.ERRORINFO = void 0;
const tsrpc_1 = require("tsrpc");
exports.ERRORINFO = {
    TOKEN_ERROR: {
        code: 1001, message: 'TOKEN错误', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    NEED_CAPTCHA: {
        code: 1002, message: '请填写图片验证码', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    CAPTCHA_ERROR: {
        code: 1003, message: '图片验证码错误', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    SMS_CODE_ERROR: {
        code: 1004, message: '手机验证码错误', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    PHONE_ERROR: {
        code: 1005, message: '手机号不存在', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    PHONE_EXIST: {
        code: 1006, message: '手机号已注册', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    ACCOUNT_ERROR: {
        code: 1007, message: '手机号不存在', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    ACCOUNT_EXIST: {
        code: 1008, message: '手机号已注册', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    ACCOUNT_BLACK: {
        code: 1009, message: '黑名单帐号', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    PASSWORD_ERROR: {
        code: 1010, message: '密码错误', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    IP_LIMIT: {
        code: 1011, message: 'IP超过限制', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    CAPTCHA_IP_LIMIT: {
        code: 1012, message: '图片验证码IP限制', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    SMS_IP_LIMIT: {
        code: 1013, message: '短信验证码IP限制', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    SMS_SEND_ERROR: {
        code: 1014, message: '短信发送失败', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
    SMS_SENDING: {
        code: 1015, message: '短信发送中', type: tsrpc_1.TsrpcErrorType.ApiError,
    },
};
exports.USER_ERROR = {
    code: 903,
    message: '用户异常',
    type: tsrpc_1.TsrpcErrorType.ApiError,
};
exports.TIMEOUT_ERROR = {
    code: 900,
    message: '登录超时',
    type: tsrpc_1.TsrpcErrorType.ServerError,
};
exports.PASSWORD_ERROR = {
    code: 901,
    message: '密码错误',
    type: tsrpc_1.TsrpcErrorType.ServerError,
};
