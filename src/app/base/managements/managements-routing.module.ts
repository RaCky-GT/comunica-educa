import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementsComponent} from "@base/managements/managements.component";

const routes: Routes = [
  { path: '', component: ManagementsComponent },
  { path: ':id/:management_name', component: ManagementsComponent },
  { path: ':id/:management_name/:id_steps/:steps_name', component: ManagementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementsRoutingModule { }
