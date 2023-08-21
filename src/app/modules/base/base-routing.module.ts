import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout';
import { ManagementViewComponent, ProfessorsViewComponent, StudentsViewComponent } from './views';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'students', component: StudentsViewComponent },
      { path: 'professors', component: ProfessorsViewComponent },
      { path: 'management', component: ManagementViewComponent },
      { path: '**', redirectTo: 'professors' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
