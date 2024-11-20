export interface BaseRequest {
  /** 客户端的设备信息 */
  device: {
    /** 设备唯一id */
    id: string,
    /** 其它待补充 */
  }
  /** 开启登录验证的需要带这个token */
  token?: string,
  /** 活动ID */
  activityId?: string
}

export interface BaseResponse {
  /**
   * 新的Token,C端对比不一样要更新本地的数据
   */
  token?: string;
}

export interface BaseConf {
  needLogin: boolean
}

export interface BasePageRequest {
  pageSize: number;
  pageNumber: number;
}

export interface BasePageResponse {
  total: number;
  totalPage: number;
  pageNumber: number;
}
