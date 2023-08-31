import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';

interface menuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'base-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './base-navbar.component.html',
  styles: [
  ]
})
export class BaseNavbarComponent {
  navbarOpen = false;
  faBars = signal<IconDefinition>(faBars);
  menu = signal<menuItem[]>([
    {
      title: 'Estudiantes',
      url: '/students'
    },
    {
      title: 'Catedráticos',
      url: '/professors'
    },
    {
      title: 'Gestiones',
      url: '/managements'
    }
  ])

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
