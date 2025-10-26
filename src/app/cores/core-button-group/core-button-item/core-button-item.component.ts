import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICoreButton, EnumButtonColor } from '../../../interfaces/ICoreButton';

@Component({
  selector: 'app-core-button-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-button-item.component.html',
  styleUrls: ['./core-button-item.component.scss']
})
export class CoreButtonItemComponent {
  @Input() data!: ICoreButton;
  @Output() buttonClick = new EventEmitter<ICoreButton>();

  onClick(): void {
    if (!this.data || this.data.disabled) return;
    this.buttonClick.emit({ ...this.data, action: this.data.action ?? this.data.code });
  }

  get colorClass(): string {
    switch (this.data?.color) {
      case EnumButtonColor.Primary: return 'btn-primary';
      case EnumButtonColor.Success: return 'btn-success';
      case EnumButtonColor.Warning: return 'btn-warning';
      case EnumButtonColor.Danger:  return 'btn-danger';
      case EnumButtonColor.Gray:    return 'btn-gray';
      default:                      return 'btn-default';
    }
  }
}
