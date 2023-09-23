import { Component, OnInit, inject, signal } from '@angular/core';

import { ProfessorsService } from '@core/services';
import { Professors } from '@core/models';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styles: [
  ]
})
export class ProfessorsComponent implements OnInit{
  private professorService = inject(ProfessorsService);
  public professors = signal<Professors[] | undefined>(undefined);
  public professorsWasFound = signal(true);

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

  openNewTab(url:string) {
    window.open(url, '_blank');
  }
}
