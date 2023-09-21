import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Students } from '@core/models';
import { StudentsService } from '@core/services';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }

  public students = signal<Students[]>([]);

  private studentsService = inject(StudentsService);

  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentsService.getStudents().subscribe({
      next: (resp) => this.students.set(resp),
      error: (error) => console.log(error)
    })
  }
}
