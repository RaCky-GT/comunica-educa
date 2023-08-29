import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementsComponent} from "@admin/managements/managements.component";

const routes: Routes = [
  { path: '', component: ManagementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementsRoutingModule { }
