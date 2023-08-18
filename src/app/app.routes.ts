import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'admin',
    children: [
      {path: '', loadComponent: () => import('./admin/pages').then(c => c.HomePageComponent)}
    ]
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
];
