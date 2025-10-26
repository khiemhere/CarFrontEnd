export interface ICoreButton {
  code: string;
  iconClass: string;
  tooltip?: string;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'gray' | 'orange';
  disabled?: boolean;
  visible?: boolean;
  dividerBefore?: boolean;
  action?: string; // ← tuỳ chọn; nếu không truyền sẽ dùng code khi emit
}

// color button
export enum EnumButtonColor {
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Gray = 'gray',
  Orange = 'orange',
}
