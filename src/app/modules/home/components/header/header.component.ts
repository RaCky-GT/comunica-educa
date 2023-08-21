import { Component } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styles: [
    `
      [nz-menu] {
        line-height: 64px;
      }
    `,
  ],
})
export class HeaderComponent {}
