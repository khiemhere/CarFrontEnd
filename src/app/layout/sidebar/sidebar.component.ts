import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
@Input() collapsed = false;

  menu = [
    { title: 'Dashboard', icon: 'bi-speedometer2', route: '/dashboard' },
    { title: 'Colors', icon: 'bi-droplet', route: '/theme/colors' },
    { title: 'Typography', icon: 'bi-type', route: '/theme/typography' },
    { title: 'Buttons', icon: 'bi-ui-radios', route: '/components/buttons' },
    { title: 'Charts', icon: 'bi-graph-up', route: '/charts' },
    { title: 'Forms', icon: 'bi-input-cursor', route: '/forms' },
    { title: 'Widgets', icon: 'bi-grid', route: '/widgets', badge: 'NEW' },
  ];
}
