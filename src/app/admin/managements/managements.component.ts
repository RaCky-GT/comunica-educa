import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Managements } from '@core/models';
import { ManagementsService } from '@core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managements',
  templateUrl: './managements.component.html',
  styles: [
  ]
})
export class ManagementsComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }

  public managements = signal<Managements[] | undefined>(undefined);
  public managementsWasFound = signal(true);
  public faPenToSquare = signal(faPenToSquare);
  public faTrash = signal(faTrash);
  public faEye = signal(faEye);
  public management = computed(() => this.managementsService.currentManagement());

  private managementsService = inject(ManagementsService);
  private router = inject(Router);

  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  ngOnInit(): void {
    this.loadManagements();
  }

  loadManagements() {
    this.managementsService.getManagements().subscribe({
      next: (resp) => {
        this.managements.set(resp);
        if (resp.length > 0) {
          this.managementsWasFound.set(true);
        } else {
          this.managementsWasFound.set(false);
        }
      },
      error: (error) => {
        console.log(error);
        this.managements.set(undefined);
        this.managementsWasFound.set(false);
      },
    });
  }

  onView(management: Managements) {
    this.router.navigateByUrl(`/admin/managements/${management.id}`);
  }

  onDelete(management: Managements) {
    this.managementsService.deleteManagement(management);
    this.loadManagements();
    this.onClose();
  }

  onSet(management: Managements) {
    this.managementsService.setCurrentManagement(management);
  }

  onClose(): void {
    this.managementsService.setCurrentManagement(null);
  }

}
