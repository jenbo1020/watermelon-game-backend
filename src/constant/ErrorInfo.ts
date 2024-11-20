import type { TsrpcErrorData } from 'tsrpc';
import { TsrpcErrorType } from 'tsrpc';

export const ERRORINFO = {
  TOKEN_ERROR: {
    code: 1001, message: 'TOKEN错误', type: TsrpcErrorType.ApiError,
  },
  NEED_CAPTCHA: {
    code: 1002, message: '请填写图片验证码', type: TsrpcErrorType.ApiError,
  },
  CAPTCHA_ERROR: {
    code: 1003, message: '图片验证码错误', type: TsrpcErrorType.ApiError,
  },
  SMS_CODE_ERROR: {
    code: 1004, message: '手机验证码错误', type: TsrpcErrorType.ApiError,
  },
  PHONE_ERROR: {
    code: 1005, message: '手机号不存在', type: TsrpcErrorType.ApiError,
  },
  PHONE_EXIST: {
    code: 1006, message: '手机号已注册', type: TsrpcErrorType.ApiError,
  },
  ACCOUNT_ERROR: {
    code: 1007, message: '手机号不存在', type: TsrpcErrorType.ApiError,
  },
  ACCOUNT_EXIST: {
    code: 1008, message: '手机号已注册', type: TsrpcErrorType.ApiError,
  },
  ACCOUNT_BLACK: {
    code: 1009, message: '黑名单帐号', type: TsrpcErrorType.ApiError,
  },
  PASSWORD_ERROR: {
    code: 1010, message: '密码错误', type: TsrpcErrorType.ApiError,
  },
  IP_LIMIT: {
    code: 1011, message: 'IP超过限制', type: TsrpcErrorType.ApiError,
  },
  CAPTCHA_IP_LIMIT: {
    code: 1012, message: '图片验证码IP限制', type: TsrpcErrorType.ApiError,
  },
  SMS_IP_LIMIT: {
    code: 1013, message: '短信验证码IP限制', type: TsrpcErrorType.ApiError,
  },
  SMS_SEND_ERROR: {
    code: 1014, message: '短信发送失败', type: TsrpcErrorType.ApiError,
  },
  SMS_SENDING: {
    code: 1015, message: '短信发送中', type: TsrpcErrorType.ApiError,
  },


}


export const USER_ERROR: TsrpcErrorData = {
  code: 903,
  message: '用户异常',
  type: TsrpcErrorType.ApiError,
};

export const TIMEOUT_ERROR: TsrpcErrorData = {
  code: 900,
  message: '登录超时',
  type: TsrpcErrorType.ServerError,
};

export const PASSWORD_ERROR: TsrpcErrorData = {
  code: 901,
  message: '密码错误',
  type: TsrpcErrorType.ServerError,
};
