import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carFrontEnd';
}

// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { DefaultHeaderComponent } from './layout/default-header/default-header.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, DefaultHeaderComponent],
//   template: `
//     <app-default-header></app-default-header>
//     <router-outlet></router-outlet>
//   `
// })
// export class AppComponent {}
