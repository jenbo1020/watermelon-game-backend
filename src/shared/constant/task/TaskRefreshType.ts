/** 刷新频率 */
export enum ETaskRefreshType {
  // 一直刷新
  always = 'always',
  // 每日刷新
  daily = 'daily',
  // 仅一次
  once = 'once',
  // 每周刷新
  weekly = 'weekly',
  // 每月刷新
  monthly = 'monthly',
  // 每年刷新
  yearly = 'yearly',
}
