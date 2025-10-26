import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreButtonItemComponent } from './core-button-item/core-button-item.component';
import { ICoreButton } from '../../interfaces/ICoreButton';

@Component({
  selector: 'app-core-button-group',
  standalone: true,
  imports: [CommonModule, CoreButtonItemComponent],
  templateUrl: './core-button-group.component.html',
  styleUrls: ['./core-button-group.component.scss']
})
export class CoreButtonGroupComponent {
  @Input() buttons: ICoreButton[] = [];
  @Input() showAll = true; // hiển thị tất cả, bỏ qua visible=false nếu cần test
  @Output() buttonClick = new EventEmitter<ICoreButton>();

  onButtonClick(btn: ICoreButton) { this.buttonClick.emit(btn); }
}
