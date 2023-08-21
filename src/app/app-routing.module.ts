import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/pages').then(c => c.HomePageComponent)
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
