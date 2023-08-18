import { Routes } from '@angular/router';
import { LayoutComponent } from './public/layout';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {path: '', loadComponent: () => import('./public/pages').then(c => c.HomePageComponent)},
      {path: 'gestiones', loadComponent: () => import('./public/pages').then(c => c.GestionesPageComponent)},
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dasboard'
  }
];
