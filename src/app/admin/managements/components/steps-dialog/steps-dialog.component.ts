import {Component, computed, effect, inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ManagementsService} from "@core/services";

@Component({
  selector: 'app-steps-dialog',
  templateUrl: './steps-dialog.component.html'
})
export class StepsDialogComponent implements OnInit{
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
        step_number: [this.managementsService.currentStep()?.step_number, [Validators.required, Validators.min(0)]],
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
        step_number: ['', [Validators.required, Validators.min(0)]],
        status: [true, [Validators.required]],
        title: ['', [Validators.required]],
        company: [''],
        address: [''],
        link: [''],
        contact: [''],
        tel: [''],
      }));
    }
  });

  ngOnInit(): void {
    this.stepsForm.get('company')?.valueChanges.subscribe((step) => {
      if(step === '') {
        this.stepsForm.get('company')?.setValidators([]);
        this.stepsForm.get('address')?.setValidators([]);
        this.stepsForm.get('link')?.setValidators([]);
        this.stepsForm.get('contact')?.setValidators([]);
        this.stepsForm.get('tel')?.setValidators([]);
      } else {
        this.stepsForm.get('company')?.setValidators([Validators.required]);
        this.stepsForm.get('address')?.setValidators([Validators.required]);
        this.stepsForm.get('link')?.setValidators([Validators.required]);
        this.stepsForm.get('contact')?.setValidators([Validators.required]);
        this.stepsForm.get('tel')?.setValidators([Validators.required]);
      }
      this.stepsForm.get('company')?.updateValueAndValidity();
      this.stepsForm.get('address')?.updateValueAndValidity();
      this.stepsForm.get('link')?.updateValueAndValidity();
      this.stepsForm.get('contact')?.updateValueAndValidity();
      this.stepsForm.get('tel')?.updateValueAndValidity();
    })
  }

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

  onClose() {
    this.managementsService.setCurrentStep(null);
    return (this.stepsForm = this.fb.group({
      description: ['', [Validators.required]],
      step_number: ['', [Validators.required, Validators.min(0)]],
      status: [true, [Validators.required]],
      title: ['', [Validators.required]],
      company: [''],
      address: [''],
      link: [''],
      contact: [''],
      tel: [''],
    }));
  }

}
