import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@base/base.module').then(m => m.BaseModule),
  },
  {
    path: 'login',
    loadChildren: () => import('@auth/auth.module').then(m => m.AuthModule),
    ...canActivate(() => redirectLoggedInTo(['/admin']))
  },
  {
    path: 'admin',
    loadChildren: () => import('@admin/admin.module').then(m => m.AdminModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'not-found',
    loadComponent: () => import('@shared/pages').then(c => c.NotFoundPageComponent)
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
