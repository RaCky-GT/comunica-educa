import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsRoutingModule } from './managements-routing.module';
import { ManagementsComponent } from './managements.component';
import { ManagementsDialogComponent } from './components/managements-dialog/managements-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ManagementsComponent,
    ManagementsDialogComponent
  ],
  imports: [
    CommonModule,
    ManagementsRoutingModule,
    FontAwesomeModule,
  ]
})
export class ManagementsModule { }
