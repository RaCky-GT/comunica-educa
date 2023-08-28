import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styles: [
    `
      nz-content {
        padding: 50px;
      }
      .inner-content {
        background: #fff;
        padding: 24px;
        min-height: 280px;
      }
    `,
  ],
})
export class HomeComponent {}
