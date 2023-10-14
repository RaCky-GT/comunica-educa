import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Managements } from '@core/models';
import { ManagementsService } from '@core/services';

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
  public management = computed(() => this.managementsService.currentManagement());

  private managementsService = inject(ManagementsService);

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
