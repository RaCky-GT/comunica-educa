import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styles: [
  ]
})
export class ProfessorsComponent {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
}
