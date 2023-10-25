import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { ManagementsComponent } from './managements.component';
import { ManagementsDialogComponent } from './components/managements-dialog/managements-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestPageComponent } from './components/request-page/request-page.component';
import { RequestDialogComponent } from './components/request-dialog/request-dialog.component';


@NgModule({
  declarations: [
    ManagementsComponent,
    ManagementsDialogComponent,
    RequestPageComponent,
    RequestDialogComponent
  ],
  imports: [
    CommonModule,
    ManagementsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class ManagementsModule { }
