import {Component, Input, computed, inject, signal, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '@core/models';
import { ManagementsService } from '@core/services';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styles: [
  ]
})
export class RequestPageComponent implements OnInit{
  @Input()
  get color(): string {
    return this._color;
  }

  @Input()
  id?: string;

  public managements = signal<Request[] | undefined>(undefined);
  public managementsWasFound = signal(true);
  public faPenToSquare = signal(faPenToSquare);
  public faTrash = signal(faTrash);
  public faEye = signal(faEye);
  public request = computed(() => this.managementsService.currentRequest());

  private managementsService = inject(ManagementsService);
  private router = inject(Router);

  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  ngOnInit(): void {
    this.loadRequest();
  }

  loadRequest() {
    this.managementsService.getRequest(this.id || '').subscribe({
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

  onView(management: Request) {
    this.router.navigateByUrl(`/admin/managements/${this.id}/${management.id}`);
    this.managementsService.setCurrentManagement(management);
  }

  onDelete(management: Request) {
    this.managementsService.deleteRequest(management, this.id!);
    this.loadRequest();
    this.onClose();
  }

  onSet(management: Request) {
    this.managementsService.setCurrentRequest(management);
  }

  onClose(): void {
    this.managementsService.setCurrentRequest(null);
  }
}
