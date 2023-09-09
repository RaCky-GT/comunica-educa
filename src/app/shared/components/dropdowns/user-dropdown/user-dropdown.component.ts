import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createPopper } from "@popperjs/core";
import { Router } from '@angular/router';

import { AuthService } from '@core/services';

@Component({
  selector: 'user-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dropdown.component.html'
})
export class UserDropdownComponent implements AfterViewInit {
  // Inyecciones
  private authService = inject(AuthService);
  private router = inject(Router);

  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }

  toggleDropdown(event: MouseEvent) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  doLogout(): void {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((err) => console.log(err));
  }
}
