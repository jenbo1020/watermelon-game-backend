import type { CommonField } from '../../common/CommonField';

/** 角色db定义 */
export interface DbAdminRole extends CommonField {
  _id: string;
  /** 角色名称 */
  roleName: string;
  /** 角色标识 */
  roleCode: string;
  /** 备注 */
  remark?: string;
  /** 权限配置 */
  permissionCodeList: string[];
}
