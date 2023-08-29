import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "@admin/admin.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', loadChildren: () => import('@admin/home/home.module').then(m => m.HomeModule) },
      { path: 'managements', loadChildren: () => import('@admin/managements/managements.module').then(m => m.ManagementsModule) },
      { path: 'professors', loadChildren: () => import('@admin/professors/professors.module').then(m => m.ProfessorsModule) },
      { path: 'students', loadChildren: () => import('@admin/students/students.module').then(m => m.StudentsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
