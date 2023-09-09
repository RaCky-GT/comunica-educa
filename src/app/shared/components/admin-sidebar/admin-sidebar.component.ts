import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserDropdownComponent } from '../dropdowns';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faBars,
  faTimes,
  faChalkboard,
  faTableColumns,
  faUserTie,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface menuItems {
  name: string;
  link: string;
  icon: IconProp;
}

@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    UserDropdownComponent,
    FontAwesomeModule,
  ],
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent {
  public faBars = signal<IconDefinition>(faBars);
  public faTimes = signal<IconDefinition>(faTimes);
  public faChalkboard = signal<IconDefinition>(faChalkboard);
  public faTableColumns = signal<IconDefinition>(faTableColumns);
  public faUserTie = signal<IconDefinition>(faUserTie);
  public faListCheck = signal<IconDefinition>(faListCheck);

  public menuItems = signal<menuItems[]>([
    { name: 'Dashboard', link: '/admin/dashboard', icon: this.faTableColumns() },
    { name: 'Catedráticos', link: '/admin/professors', icon: this.faChalkboard() },
    { name: 'Estudiantes', link: '/admin/students', icon: this.faUserTie() },
    { name: 'Gestiones', link: '/admin/managements', icon: this.faListCheck() },
  ]);

  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
