import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {ModalFatherComponent} from '../../components/modal-father/modal-father.component';

export interface Gestion {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-gestiones-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule, ModalFatherComponent],
  templateUrl: './gestiones-page.component.html',
  styles: [
    `
    .example-container {
      width: 100%;
      height: 100%;
    }
    `
  ]
})
export class GestionesPageComponent {
  jubilacion = signal<Gestion[]>([
    {
      name: 'AEP Movimiento de Personal',
      icon: 'description',
    },
    {
      name: 'Prestaciones Laborales',
      icon: 'description',
    },
  ]);

  ingreso = signal<Gestion[]>([
    {
      name: 'ATP Movimiento de Personal (docentes)',
      icon: 'article',
    },
    {
      name: 'ATP Movimiento de Personal (administrativos)',
      icon: 'article',
    },
  ]);

  traslado = signal<Gestion[]>([
    {
      name: 'AEP Movimiento de Personal',
      icon: 'feed',
    },
    {
      name: 'ATP Movimiento de Personal',
      icon: 'feed',
    },
  ]);

}
