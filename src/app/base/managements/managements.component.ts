import { Component, OnInit, inject, signal } from '@angular/core';
import { Managements } from '@core/models';

import { ManagementsService } from '@core/services';

@Component({
  selector: 'app-managements',
  templateUrl: './managements.component.html',
  styles: [
  ]
})
export class ManagementsComponent implements OnInit {
  private managementsService = inject(ManagementsService);

  public managements = signal<Managements[] | undefined>(undefined);
  public managementsWasFound = signal(true);

  ngOnInit(): void {
    this.loadManagements();
  }

  loadManagements(): void {
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
      }
    })
  }
}
