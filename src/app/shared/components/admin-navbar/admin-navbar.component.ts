import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDropdownComponent } from '../dropdowns';

@Component({
  selector: 'admin-navbar',
  standalone: true,
  imports: [CommonModule, UserDropdownComponent],
  templateUrl: './admin-navbar.component.html'
})
export class AdminNavbarComponent {

}
