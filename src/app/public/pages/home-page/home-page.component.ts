import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
//New imports Tabs
import {MatTabsModule} from '@angular/material/tabs';

//import components
import {CarouselComponent} from '../../components/carousel/carousel.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, CarouselComponent],
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {

}
