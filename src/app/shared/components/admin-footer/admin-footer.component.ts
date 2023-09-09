import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-footer.component.html',
})
export class AdminFooterComponent {
  public date = signal<number>(new Date().getFullYear());
}
