import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProfessorsService } from '@core/services';

@Component({
  selector: 'professors-dialog',
  templateUrl: './professors-dialog.component.html'
})
export class ProfessorsDialogComponent {
  private fb = inject(FormBuilder);
  private studentsService = inject(ProfessorsService);

  public professorsForm: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
    link: ['', [Validators.required]],
    title: ['', [Validators.required]],
    grade: ['', [Validators.required]],
  });

  async onSubmit() {
    try {
      const response = await this.studentsService.addProfessors(this.professorsForm.value);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
}
