import { Injectable } from '@angular/core';

export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  badge?: string;
  adminOnly?: boolean; // 👈 thêm cờ cho menu chỉ hiển thị với admin
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menu: MenuItem[] = [
    { title: 'Dashboard', icon: 'bi-speedometer2', route: '/dashboard' },
    { title: 'Colors', icon: 'bi-droplet', route: '/contract', adminOnly: true },
    { title: 'Typography', icon: 'bi-type', route: '/theme/typography', adminOnly: true },
    { title: 'Buttons', icon: 'bi-ui-radios', route: '/components/buttons' },
    { title: 'Charts', icon: 'bi-graph-up', route: '/charts', adminOnly: true },
    { title: 'Forms', icon: 'bi-input-cursor', route: '/contract' },
    { title: 'Widgets', icon: 'bi-grid', route: '/widgets', badge: 'NEW', adminOnly: true },
  ];

  /** 🧠 Lấy toàn bộ menu (có thể lọc sau trong component) */
  getMenu(): MenuItem[] {
    return this.menu;
  }
}
