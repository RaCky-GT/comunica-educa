import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {
  AdminFooterComponent,
  AdminHeaderStatsComponent,
  AdminNavbarComponent,
  AdminSidebarComponent,
} from '@shared/components';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSidebarComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminHeaderStatsComponent,
  ],
})
export class AdminModule {}
