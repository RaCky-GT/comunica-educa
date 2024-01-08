import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagementsService } from '@core/services';

@Component({
  selector: 'managements-dialog',
  templateUrl: './managements-dialog.component.html',
  styles: [
  ]
})
export class ManagementsDialogComponent {
  public managementsForm!: FormGroup;

  private fb = inject(FormBuilder);
  private managementsService = inject(ManagementsService);
  public management = computed(() => this.managementsService.currentManagement());

  public professorsEffect = effect(() => {
    if (this.managementsService.currentManagement()) {
      return (this.managementsForm = this.fb.group({
        id: [this.managementsService.currentManagement()?.id, [Validators.required]],
        description: [this.managementsService.currentManagement()?.description, [Validators.required]],
        status: [this.managementsService.currentManagement()?.status, [Validators.required]],
        title: [this.managementsService.currentManagement()?.title, [Validators.required]],
      }));
    } else {
      return (this.managementsForm = this.fb.group({
        description: ['', [Validators.required]],
        status: [true, [Validators.required]],
        title: ['', [Validators.required]],
      }));
    }
  });

  async onSubmit() {
    try {
      if (this.management()) {
        const response = await this.managementsService.updateManagement(
          this.managementsForm.value
        );
        console.log(response);
        this.onClose();
      } else {
        const response = await this.managementsService.addManagements(
          this.managementsForm.value
        );
        console.log(response);
        this.onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClose() {
    this.managementsService.setCurrentManagement(null);
    return (this.managementsForm = this.fb.group({
      description: ['', [Validators.required]],
      status: [true, [Validators.required]],
      title: ['', [Validators.required]],
    }));
  }
}
