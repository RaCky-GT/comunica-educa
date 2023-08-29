import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "@base/base.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', loadChildren: () => import('@base/home/home.module').then(m => m.HomeModule) },
      { path: 'managements', loadChildren: () => import('@base/managements/managements.module').then(m => m.ManagementsModule) },
      { path: 'professors', loadChildren: () => import('@base/professors/professors.module').then(m => m.ProfessorsModule) },
      { path: 'students', loadChildren: () => import('@base/students/students.module').then(m => m.StudentsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
