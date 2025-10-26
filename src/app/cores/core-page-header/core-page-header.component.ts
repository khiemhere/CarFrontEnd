import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output as NgOutput } from '@angular/core';
import { ICoreButton } from '../../interfaces/ICoreButton';
import { CoreButtonGroupComponent } from '../core-button-group/core-button-group.component';
import { BUTTONS } from '../core-button-group/EnumButton';

@Component({
  selector: 'app-core-page-header',
  standalone: true,
  imports: [CommonModule, CoreButtonGroupComponent],
  templateUrl: './core-page-header.component.html',
  styleUrls: ['./core-page-header.component.scss']
})
export class CorePageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';

  @Input() buttons: ICoreButton[] | null = null;

  @Input() includeCodes?: string[];
  @Input() excludeCodes?: string[];
  @Input() showAllButtons = true;
  @Input() showAdd = false;

  @NgOutput() buttonClick = new EventEmitter<ICoreButton>();
  @NgOutput() addClick    = new EventEmitter<void>();

  onChildButtonClick(btn: ICoreButton) { this.buttonClick.emit(btn); }

  // 👉 Đây là mảng thực dùng để render
  get resolvedButtons(): ICoreButton[] {
    // 1) nếu cha truyền buttons thì ưu tiên dùng
    let base = this.buttons && this.buttons.length
      ? this.buttons
      : (BUTTONS['buttons']);

    // 2) include/exclude (nếu có)
    if (this.includeCodes?.length) {
      const allow = new Set(this.includeCodes);
      base = base.filter(b => allow.has(b.code));
    }
    if (this.excludeCodes?.length) {
      const deny = new Set(this.excludeCodes);
      base = base.filter(b => !deny.has(b.code));
    }
    return base;
  }
}
