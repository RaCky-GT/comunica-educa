import { Component, ElementRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '@core/services';

@Component({
  selector: 'students-dialog',
  templateUrl: './students-dialog.component.html'
})
export class StudentsDialogComponent {
  private fb = inject(FormBuilder);
  private studentsService = inject(StudentsService);

  public studentsForm: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
    link: ['', [Validators.required]],
    title: ['', [Validators.required]],
    grade: ['', [Validators.required]],
  });

  async onSubmit() {
    try {
      const response = await this.studentsService.addStudents(this.studentsForm.value);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
}
