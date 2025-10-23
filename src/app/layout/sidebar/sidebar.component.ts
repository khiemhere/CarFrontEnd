import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() collapsed = false;
  menu: MenuItem[] = [];
  isAdmin = false;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    const allMenu = this.menuService.getMenu();
    this.menu = this.isAdmin ? allMenu : allMenu.filter(m => !m.adminOnly);
  }
}
