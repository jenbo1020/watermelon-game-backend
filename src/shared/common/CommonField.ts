/**
 * 通用表字段
 */
export interface CommonField {
  /** 是否删除 */
  isRemoved?: boolean;
  /** 是否启用 */
  isEnabled?: boolean;
  /** 创建时间 */
  create?: {
    time: number;
    admin: {
      adminId: string;
      nickname: string;
    };
  };
  /** 更新时间 */
  update?: {
    time: number;
    admin: {
      adminId: string;
      nickname: string;
    };
  };
}
