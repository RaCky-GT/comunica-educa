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
  private file?: File;

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
        company: [this.managementsService.currentStep()?.company, Validators.required],
        address: [this.managementsService.currentStep()?.address, Validators.required],
        link: [this.managementsService.currentStep()?.link, Validators.required],
        contact: [this.managementsService.currentStep()?.contact, Validators.required],
        tel: [this.managementsService.currentStep()?.tel, Validators.required],
      }));
    } else {
      return (this.stepsForm = this.fb.group({
        description: ['', [Validators.required]],
        status: [true, [Validators.required]],
        title: ['', [Validators.required]],
        company: ['', Validators.required],
        address: ['', Validators.required],
        link: ['', Validators.required],
        contact: ['', Validators.required],
        tel: ['', Validators.required],
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
          this.file,
        );
        console.log(response);
        this.onClose();
      } else {
        const response = await this.managementsService.addStep(
          this.stepsForm.value,
          this.id,
          this.step,
          this.file,
        );
        console.log(response);
        this.onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  upFile($event: any) {
    this.file = $event.target.files[0];
  }

  onClose(): void {
    this.managementsService.setCurrentStep(null);
  }

}
