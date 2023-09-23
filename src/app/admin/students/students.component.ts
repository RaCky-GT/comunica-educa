import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Students } from '@core/models';
import { StudentsService } from '@core/services';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [],
})
export class StudentsComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }

  public students = signal<Students[] | undefined>(undefined);
  public studentsWasFound = signal(true);
  public faPenToSquare = signal(faPenToSquare);
  public faTrash = signal(faTrash);
  public student = computed(() => this.studentsService.currentStudent());

  private studentsService = inject(StudentsService);

  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentsService.getStudents().subscribe({
      next: (resp) => {
        this.students.set(resp);
        if (resp.length > 0) {
          this.studentsWasFound.set(true);
        } else {
          this.studentsWasFound.set(false);
        }
      },
      error: (error) => {
        console.log(error);
        this.students.set(undefined);
        this.studentsWasFound.set(false);
      },
    });
  }

  onDelete(student: Students) {
    this.studentsService.deleteStudent(student);
    this.loadStudents()
    this.onClose();
  }

  onSet(student: Students) {
    this.studentsService.setCurrentStudent(student);
  }

  onClose(): void {
    this.studentsService.setCurrentStudent(null);
  }
}
