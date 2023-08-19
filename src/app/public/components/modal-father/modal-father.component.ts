import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ModalChildrenComponent} from 'src/app/public/components/modal-children/modal-children.component'

@Component({
  selector: 'app-modal-father',
  standalone: true,
  templateUrl: './modal-father.component.html',
  styleUrls: ['./modal-father.component.css'],
  imports: [MatButtonModule, MatDialogModule],
})
export class ModalFatherComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalChildrenComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}