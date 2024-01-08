import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementsComponent} from "@base/managements/managements.component";

const routes: Routes = [
  { path: '', component: ManagementsComponent },
  { path: ':id', component: ManagementsComponent },
  { path: ':id/:id_steps', component: ManagementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementsRoutingModule { }
