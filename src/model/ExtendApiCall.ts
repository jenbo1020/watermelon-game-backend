
declare module 'tsrpc' {
  export interface ApiCall {
    userInfo: {
      uid: string,
      nickname: string,
      avatar: string,
      token: string
    };
    queryParms: string;
  }
  export interface BaseConnection {
    // 自定义的新字段
    queryParms?: string;
  }
}
export interface CurrentUser {
};
