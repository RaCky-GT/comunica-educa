import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-managements',
  templateUrl: './managements.component.html',
  styles: [
  ]
})
export class ManagementsComponent {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

}
