import type { BaseRequest, BaseResponse, BaseConf } from '../../Base';
/** 登录-Token登录 */
export interface ReqTokenLogin extends BaseRequest {
  /** 登录的tokeb串 */
  token: string;
  /** 是否要返回用户信息 */
  needUserInfo?: boolean;
}

export interface ResTokenLogin extends BaseResponse {
  /** 登录状态验证串 */
  token: string;
  /** 用户信息 */
  userInfo?: {
    /** 用户id */
    uid: string,
    /** 昵称 */
    nickname: string;
    /** 头像 */
    avatar: string;
  }
}

export const conf: BaseConf = {
  needLogin: true
};
