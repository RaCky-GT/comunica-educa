import {Component, computed, effect, Inject, inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ManagementsService} from "@core/services";

@Component({
  selector: 'request-dialog',
  templateUrl: './request-dialog.component.html'
})
export class RequestDialogComponent {
  @Input()
  id!: string;

  public requestForm!: FormGroup;

  private fb = inject(FormBuilder);
  private managementsService = inject(ManagementsService);
  public request = computed(() => this.managementsService.currentRequest());

  public requestEffect = effect(() => {
    if (this.managementsService.currentRequest()) {
      return (this.requestForm = this.fb.group({
        id: [this.managementsService.currentRequest()?.id, [Validators.required]],
        description: [this.managementsService.currentRequest()?.description, [Validators.required]],
        status: [this.managementsService.currentRequest()?.status, [Validators.required]],
        title: [this.managementsService.currentRequest()?.title, [Validators.required]],
      }));
    } else {
      return (this.requestForm = this.fb.group({
        description: ['', [Validators.required]],
        status: [true, [Validators.required]],
        title: ['', [Validators.required]],
      }));
    }
  })

  async onSubmit() {
    try {
      if (this.request()) {
        const response = await this.managementsService.updateRequest(
          this.requestForm.value,
          this.id,
        );
        console.log(response);
        this.onClose();
      } else {
        const response = await this.managementsService.addRequest(
          this.requestForm.value,
          this.id,
        );
        console.log(response);
        this.onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClose() {
    this.managementsService.setCurrentRequest(null);
    return (this.requestForm = this.fb.group({
      description: ['', [Validators.required]],
      status: [true, [Validators.required]],
      title: ['', [Validators.required]],
    }));
  }
}
