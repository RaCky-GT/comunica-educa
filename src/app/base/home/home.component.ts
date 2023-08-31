import { Component, signal } from '@angular/core';

import { IconDefinition, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  faBook = signal<IconDefinition>(faBook);
}
