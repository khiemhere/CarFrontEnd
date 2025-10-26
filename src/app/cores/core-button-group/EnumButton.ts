import { ICoreButton, EnumButtonColor } from "../../interfaces/ICoreButton";

export const BUTTONS: Record<string, ICoreButton[]> = {
  buttons: [
    { code:'config', iconClass:'bi bi-gear', tooltip:'Cấu hình', color:EnumButtonColor.Gray },
    { code:'save',   iconClass:'bi bi-floppy', tooltip:'Lưu', color:EnumButtonColor.Primary, dividerBefore:true },
    { code:'copy',   iconClass:'bi bi-scissors', tooltip:'Sao chép', color:EnumButtonColor.Success },
    { code:'edit',   iconClass:'bi bi-pencil-square', tooltip:'Sửa', color:EnumButtonColor.Warning, disabled:true },
    { code:'delete', iconClass:'bi bi-trash', tooltip:'Xoá', color:EnumButtonColor.Danger, disabled:true },
    { code:'excel',  iconClass:'bi bi-file-earmark-excel', tooltip:'Xuất Excel', color:EnumButtonColor.Success },
    { code:'user',   iconClass:'bi bi-person', tooltip:'Người liên quan', color:EnumButtonColor.Gray, dividerBefore:true },
    { code:'create', iconClass:'bi bi-plus-lg', tooltip:'Thêm mới', color:EnumButtonColor.Orange, dividerBefore:true },
  ],
};
