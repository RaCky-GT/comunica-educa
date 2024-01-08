import {Component, OnInit, inject, signal, Input} from '@angular/core';
import {Managements, Request, Steps} from '@core/models';

import { ManagementsService } from '@core/services';
import {Router} from "@angular/router";

@Component({
  selector: 'app-managements',
  templateUrl: './managements.component.html',
  styles: [
  ]
})
export class ManagementsComponent implements OnInit {
  @Input()
  id?: string;

  @Input()
  id_steps?: string;

  private managementsService = inject(ManagementsService);
  #router = inject(Router);

  public managements = signal<Managements[] | undefined>(undefined);
  public requests = signal<Request[]>([])
  public steps = signal<Steps[]>([])
  public managementsWasFound = signal(true);

  ngOnInit(): void {
    this.loadManagements();
    this.loadOneManagement();
    this.loadOneRequest();
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

  loadOneManagement() {
    if (this.id) {
      this.managementsService.getRequest(this.id).subscribe({
        next: ((resp) => this.requests.set(resp)),
        error: ((error) => console.log(error))
      })
    }
  }

  loadOneRequest() {
    if (this.id_steps) {
      this.managementsService.getSteps(this.id!, this.id_steps).subscribe({
        next: ((resp) => this.steps.set(resp)),
        error: ((error) => console.log(error))
      })
    }
  }

  openRequest(id: string) {
    this.#router.navigateByUrl(`/managements/${id}`);
  }

  openSteps(request: string) {
    this.#router.navigateByUrl(`/managements/${this.id}/${request}`);
  }
}
