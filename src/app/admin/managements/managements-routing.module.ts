import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementsComponent } from '@admin/managements/managements.component';
import { RequestPageComponent } from './components';

const routes: Routes = [
  { path: '', component: ManagementsComponent },
  { path: ':id', component: RequestPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementsRoutingModule {}
