import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProfessorsService } from '@core/services';

@Component({
  selector: 'professors-dialog',
  templateUrl: './professors-dialog.component.html',
})
export class ProfessorsDialogComponent {
  public professorsForm!: FormGroup;

  private fb = inject(FormBuilder);
  private professorsService = inject(ProfessorsService);
  public professor = computed(() => this.professorsService.currentProfessor());

  public professorsEffect = effect(() => {
    if (this.professorsService.currentProfessor()) {
      return (this.professorsForm = this.fb.group({
        id: [this.professorsService.currentProfessor()?.id, [Validators.required]],
        description: [this.professorsService.currentProfessor()?.description, [Validators.required]],
        link: [this.professorsService.currentProfessor()?.link, [Validators.required]],
        title: [this.professorsService.currentProfessor()?.title, [Validators.required]],
        grade: [this.professorsService.currentProfessor()?.grade, [Validators.required]],
      }));
    } else {
      return (this.professorsForm = this.fb.group({
        description: ['', [Validators.required]],
        link: ['', [Validators.required]],
        title: ['', [Validators.required]],
        grade: ['', [Validators.required]],
      }));
    }
  });

  async onSubmit(): Promise<void> {
    try {
      if (this.professor()) {
        const response = await this.professorsService.updateProfessor(
          this.professorsForm.value
        );
        console.log(response);
        this.onClose();
      } else {
        const response = await this.professorsService.addProfessors(
          this.professorsForm.value
        );
        console.log(response);
        this.onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClose(): void {
    this.professorsService.setCurrentProfessor(null);
  }
}
