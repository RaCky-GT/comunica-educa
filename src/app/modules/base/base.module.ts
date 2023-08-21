import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { StudentsViewComponent } from './views/students-view/students-view.component';
import { ProfessorsViewComponent } from './views/professors-view/professors-view.component';
import { ManagementViewComponent } from './views/management-view/management-view.component';


@NgModule({
  declarations: [
    LayoutComponent,
    StudentsViewComponent,
    ProfessorsViewComponent,
    ManagementViewComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
