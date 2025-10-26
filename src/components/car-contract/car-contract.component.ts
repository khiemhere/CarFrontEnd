import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EnumButtonColor, ICoreButton } from '../../app/interfaces/ICoreButton';
import { CorePageHeaderComponent } from '../../app/cores/core-page-header/core-page-header.component';

@Component({
  selector: 'app-car-contract',
  standalone: true,
  imports: [CommonModule, CorePageHeaderComponent],
  templateUrl: './car-contract.component.html',
  styleUrl: './car-contract.component.scss'
})
export class CarContractComponent {
  title:string = "CONTAINER";

  onHeaderButtonClick(btn: ICoreButton) {
    const action = btn.action ?? btn.code;
    switch (action) {
      case 'save':   this.save(); break;
      case 'config': this.openConfig(); break;
      case 'excel':  this.exportExcel(); break;
      default: console.log('Click:', action);
    }
  }

  onAdd(){ console.log('Thêm mới'); }
  save(){ console.log('Lưu hợp đồng'); }
  openConfig(){ console.log('Mở cấu hình'); }
  exportExcel(){ console.log('Xuất Excel'); }

}
