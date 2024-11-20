import type { CommonField } from '../../common/CommonField';
import type { NotifyDialogStyleType } from '../../constant/NotifyDialogStyleType';
import type { NotifyShowFrequencyType } from '../../constant/NotifyShowFrequencyType';
import type { NotifyUserType } from '../../constant/NotifyUserType';

export interface DbNotify extends CommonField {
  _id: string;
  /** 通知用户类型 */
  notifyUserType: NotifyUserType;
  /** 通知名称/标题 */
  title: string;
  /** 通知弹窗样式 */
  notifyStyle:
    | {
        /** 通知弹窗样式类型 */
        notifyStyleType: NotifyDialogStyleType.TEXT;
        /** 通知文本 */
        notifyText?: string;
      }
    | {
        /** 通知弹窗样式类型 */
        notifyStyleType: NotifyDialogStyleType.IMAGE;
        /** 通知图片 */
        notifyImage: string;
      };
  /** 通知按钮配置 */
  notifyButton:
    | {
        /** 是否拥有按钮 */
        hasNotifyButton: false;
      }
    | {
        /** 是否拥有按钮 */
        hasNotifyButton: true;
        /** 按钮文本 */
        notifyButtonText: string;
      };
  /** 通知跳转配置 */
  notifyJump:
    | {
        /** 是否跳转 */
        isJump: false;
      }
    | {
        /** 是否跳转 */
        isJump: true;
        /** 跳转路径 */
        jumpPath: string;
      };
  /** 开始时间 */
  startTime: number;
  /** 结束时间 */
  endTime: number;
  /** 显示频率 */
  notifyShowFrequencyType: NotifyShowFrequencyType;
}
