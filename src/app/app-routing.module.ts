import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@base/base-routing.module').then(m => m.BaseRoutingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@admin/admin-routing.module').then(m => m.AdminRoutingModule)
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
