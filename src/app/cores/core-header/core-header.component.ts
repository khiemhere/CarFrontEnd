import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-header',
  imports: [],
  templateUrl: './core-header.component.html',
  styleUrl: './core-header.component.scss'
})
export class CoreHeaderComponent {
  /** Tiêu đề chính hiển thị bên trái */
  @Input() title: string = '';

  /** Phụ đề (tuỳ chọn, nằm dưới title) */
  @Input() subtitle?: string = '';
}
