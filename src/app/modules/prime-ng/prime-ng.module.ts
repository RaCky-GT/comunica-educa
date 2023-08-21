import { NgModule } from '@angular/core';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';



@NgModule({
  exports: [
    RippleModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
