import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorsRoutingModule } from './professors-routing.module';
import { ProfessorsComponent } from './professors.component';
import { ProfessorsDialogComponent } from './components/professors-dialog/professors-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfessorsComponent,
    ProfessorsDialogComponent
  ],
  imports: [
    CommonModule,
    ProfessorsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProfessorsModule { }
