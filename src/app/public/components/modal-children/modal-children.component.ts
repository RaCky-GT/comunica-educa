import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-modal-children',
  standalone: true,
  templateUrl: './modal-children.component.html',
  styleUrls: ['./modal-children.component.css'],
  imports: [MatDialogModule, MatButtonModule],
})
export class ModalChildrenComponent {
  constructor(public dialogRef: MatDialogRef<ModalChildrenComponent>) {}
}
