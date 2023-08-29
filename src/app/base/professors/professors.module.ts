import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorsRoutingModule } from './professors-routing.module';
import { ProfessorsComponent } from './professors.component';


@NgModule({
  declarations: [
    ProfessorsComponent
  ],
  imports: [
    CommonModule,
    ProfessorsRoutingModule
  ]
})
export class ProfessorsModule { }
