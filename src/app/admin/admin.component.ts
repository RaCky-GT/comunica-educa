import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@core/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [],
})
export class AdminComponent {
  // Inyecciones
  private authService = inject(AuthService);
  private router = inject(Router);

  doLogout(): void {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((err) => console.log(err));
  }
}
