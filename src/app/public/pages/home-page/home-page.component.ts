import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {

}
