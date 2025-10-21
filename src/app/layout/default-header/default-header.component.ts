import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-header',
  standalone: true,
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.scss'
})
export class DefaultHeaderComponent {
  @Input() sidebarOpen = true;            // nhận trạng thái sidebar (nếu có)
  @Output() toggleSidebar = new EventEmitter<void>(); // emit khi nhấn nút menu

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout() {
    alert('Đăng xuất thành công!');
    // TODO: Gọi AuthService.logout() hoặc router.navigate(['/login'])
  }
}
