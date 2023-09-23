import { Component, OnInit, inject, signal } from '@angular/core';
import { Students } from '@core/models';

import { StudentsService } from '@core/services';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit{
  private studentsService = inject(StudentsService);
  public students = signal<Students[] | undefined>(undefined);
  public studentsWasFound = signal(true);

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

  openNewTab(url:string) {
    window.open(url, '_blank');
  }
}
