import {Component, computed, inject, Input, signal} from '@angular/core';
import {Request, Steps} from "@core/models";
import {ManagementsService} from "@core/services";
import {Router} from "@angular/router";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-steps-page',
  templateUrl: './steps-page.component.html'
})
export class StepsPageComponent {
  @Input()
  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  @Input()
  id?: string;

  @Input()
  step_id?: string;

  public managements = signal<Steps[] | undefined>(undefined);
  public managementsWasFound = signal(true);
  public faPenToSquare = signal(faPenToSquare);
  public faTrash = signal(faTrash);
  public step = computed(() => this.managementsService.currentStep());

  private managementsService = inject(ManagementsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadSteps();
  }

  loadSteps() {
    this.managementsService.getSteps(this.id || '', this.step_id || '').subscribe({
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

  onDelete(management: Steps) {
    this.managementsService.deleteStep(management, this.id!, this.step_id!);
    this.loadSteps();
    this.onClose();
  }

  onSet(management: Request) {
    this.managementsService.setCurrentStep(management);
  }

  onClose(): void {
    this.managementsService.setCurrentStep(null);
  }
}
