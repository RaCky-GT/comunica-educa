import { Component, ElementRef, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '@core/services';

@Component({
  selector: 'students-dialog',
  templateUrl: './students-dialog.component.html',
})
export class StudentsDialogComponent {
  public studentsForm!: FormGroup;

  private fb = inject(FormBuilder);
  private studentsService = inject(StudentsService);

  public student = computed(() => this.studentsService.currentStudent());

  public studentsEffect = effect(() => {
    if (this.studentsService.currentStudent()) {
      return (this.studentsForm = this.fb.group({
        id: [this.studentsService.currentStudent()?.id, [Validators.required]],
        description: [this.studentsService.currentStudent()?.description, [Validators.required]],
        link: [this.studentsService.currentStudent()?.link, [Validators.required]],
        title: [this.studentsService.currentStudent()?.title, [Validators.required]],
        grade: [this.studentsService.currentStudent()?.grade, [Validators.required]],
      }));
    } else {
      return (this.studentsForm = this.fb.group({
        description: ['', [Validators.required]],
        link: ['', [Validators.required]],
        title: ['', [Validators.required]],
        grade: ['', [Validators.required]],
      }));
    }
  });

  async onSubmit(): Promise<void> {
    try {
      if (this.student()) {
        const response = await this.studentsService.updateStudent(
          this.studentsForm.value
        );
        console.log(response);
        this.onClose();
      } else {
        const response = await this.studentsService.addStudents(
          this.studentsForm.value
        );
        console.log(response);
        this.onClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClose(): void {
    this.studentsService.setCurrentStudent(null);
  }
}
