import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 用户-获取用户信息 */
export interface ReqGetUserInfo extends BaseRequest {

}

export interface ResGetUserInfo extends BaseResponse {
  /** 用户信息 */
  userInfo: {
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
}