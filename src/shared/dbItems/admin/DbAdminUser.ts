import type { CommonField } from '../../common/CommonField';

/** 管理员信息表 */
export interface DbAdminUser extends CommonField {
  /** 管理员id */
  _id: string;
  /** 管理员登录密码，网络加密的密码 */
  password: string;
  /** 管理员昵称 */
  nickname?: string;
  /** 手机号 */
  phone: string;
  /** 角色id */
  roleCode: string;
  /** 角色名称 */
  roleName: string;
  /** 最近登录信息 */
  lastLogin: {
    /** 最近登录时间 */
    time: number;
    /** 最近登录的IP */
    ip: string;
  };
}
