import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [
    RouterOutlet,
    DefaultHeaderComponent,
    SidebarComponent  
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
