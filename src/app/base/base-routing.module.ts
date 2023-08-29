import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "@base/base.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: 'managements', loadChildren: () => import('@base/managements/managements.module').then(m => m.ManagementsModule) },
      { path: 'professors', loadChildren: () => import('@base/professors/professors.module').then(m => m.ProfessorsModule) },
      { path: 'students', loadChildren: () => import('@base/students/students.module').then(m => m.StudentsModule) },
      { path: '**', redirectTo: 'managements', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
