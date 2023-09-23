import { Component, Input,  computed,  inject, signal,  } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

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
  public faPenToSquare = signal(faPenToSquare);
  public faTrash = signal(faTrash);
  public professor = computed(() => this.professorService.currentProfessor());

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
        if (resp.length > 0) {
          this.professorsWasFound.set(true);
        } else {
          this.professorsWasFound.set(false);
        }
      },
      error: (error) => {
        console.log(error);
        this.professors.set(undefined);
        this.professorsWasFound.set(false);
      },
    });
  }

  onDelete(professor: Professors) {
    this.professorService.deleteProfessor(professor);
    this.loadProfessors();
    this.onClose();
  }

  onSet(professor: Professors) {
    this.professorService.setCurrentProfessor(professor);
  }

  onClose(): void {
    this.professorService.setCurrentProfessor(null);
  }

}
