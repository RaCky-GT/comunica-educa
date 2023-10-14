import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { ManagementsComponent } from './managements.component';
import { ManagementsDialogComponent } from './components/managements-dialog/managements-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementsComponent,
    ManagementsDialogComponent
  ],
  imports: [
    CommonModule,
    ManagementsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class ManagementsModule { }
