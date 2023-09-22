import { Component, Input, inject, signal } from '@angular/core';

import { Professors } from '@core/models';
import { ProfessorsService } from '@core/services';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styles: [],
})
export class ProfessorsComponent {
  @Input()
  get color(): string {
    return this._color;
  }

  public professors = signal<Professors[] | undefined>(undefined);
  public professorsWasFound = signal(true);

  private professorService = inject(ProfessorsService);

  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';

  ngOnInit(): void {
    this.loadProfessors();
  }

  loadProfessors() {
    this.professorService.getProfessors().subscribe({
      next: (resp) => {
        this.professors.set(resp);
        this.professorsWasFound.set(true);
      },
      error: (error) => {
        console.log(error);
        this.professors.set(undefined);
        this.professorsWasFound.set(false);
      },
    });
  }
}
