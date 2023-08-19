import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images =[
    {name: 'gob-gt.jpg', caption: 'Gobierno de Guatemala', description: 'Mensaje para imagen de gobierno de guatemala 1'},
    /*{name: 'gob-gt2.jpg', caption: 'Gobierno de Guatemala Dos',description: 'Mensaje para imagen de gobierno de guatemala 2'},*/
    {name: 'mineduc-digital.jpg', caption: 'Ministerio de Educación', description: 'Mensaje para imagen mineduc digital'}
  ]
}
