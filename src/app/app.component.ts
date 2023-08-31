import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet/> <h1 class="text-3xl font-bold underline">Hello world!</h1>',
})
export class AppComponent {
  isCollapsed = false;
}
