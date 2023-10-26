import {Component, computed, effect, inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ManagementsService} from "@core/services";

@Component({
  selector: 'app-steps-dialog',
  templateUrl: './steps-dialog.component.html'
})
export class StepsDialogComponent {
  @Input()
  id!: string;

  @Input()
  step!: string;

  public stepsForm!: FormGroup;

  private fb = inject(FormBuilder);
  private managementsService = inject(ManagementsService);
  public steps = computed(() => this.managementsService.currentStep());

  public stepsEffect = effect(() => {
    if (this.managementsService.currentStep()) {
      return (this.stepsForm = this.fb.group({
        id: [this.managementsService.currentStep()?.id, [Validators.required]],
        description: [this.managementsService.currentStep()?.description, [Validators.required]],
        status: [this.managementsService.currentStep()?.status, [Validators.required]],
        title: [this.managementsService.currentStep()?.title, [Validators.required]],
      }));
    } else {
      return (this.stepsForm = this.fb.group({
        description: ['', [Validators.required]],
        status: [true, [Validators.required]],
        title: ['', [Validators.required]],
      }));
    }
  })

  async onSubmit() {
    try {
      if (this.steps()) {
        const response = await this.managementsService.updateStep(
          this.stepsForm.value,
          this.id,
          this.step,
        );
        console.log(response);
        this.onClose();
      } else {
        const response = await this.managementsService.addStep(
          this.stepsForm.value,
          this.id,
          this.step,
        );
        console.log(response);
        this.onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClose(): void {
    this.managementsService.setCurrentStep(null);
  }

}
