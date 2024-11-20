/** 登录类型 */
export enum ELoginType {
  /** telegram用户 */
  TgUser = 'TgUser',
  /** Token登录 */
  Token = 'token',
}

/** 帐号类型 */
export enum EAccountType {
  /** 正式用户 */
  Official = 'official',
  /** 游客 */
  Guest = 'guest',
}

/** 房间状态 */
export enum ERoomState {
  open = 'open',
  close = 'close',
}

/** 短信类型 */
export enum ESmsType {
  login = 'login',
  resetPassword = 'resetPassword',
}

/** 问题类型 */
export enum EQuestionType {
  /** 提问 */
  QA = 'QA',
  /** 猜问 */
  GUESS = 'GUESS',
}
