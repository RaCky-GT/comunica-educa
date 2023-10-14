import { Component, Input, computed, inject, signal } from '@angular/core';
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
export class RequestPageComponent {
  @Input()
  get color(): string {
    return this._color;
  }

  public managements = signal<Request[] | undefined>(undefined);
  public managementsWasFound = signal(true);
  public faPenToSquare = signal(faPenToSquare);
  public faTrash = signal(faTrash);
  public faEye = signal(faEye);

  private managementsService = inject(ManagementsService);
  private router = inject(Router);

  // public management = this.managementsService.getManagement(this.id);

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

  onView(management: Request) {
    this.router.navigateByUrl(`/admin/managements/${management.id}`);
    this.managementsService.setCurrentManagement(management);
  }

  onDelete(management: Request) {
    this.managementsService.deleteManagement(management);
    this.loadManagements();
    this.onClose();
  }

  onSet(management: Request) {
    this.managementsService.setCurrentManagement(management);
  }

  onClose(): void {
    this.managementsService.setCurrentManagement(null);
  }
}
