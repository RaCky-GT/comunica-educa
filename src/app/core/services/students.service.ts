import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

import { Students } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private firestore = inject(Firestore);

  addStudents(student: Students) {
    const studentRef = collection(this.firestore, 'students');
    return addDoc(studentRef, student);
  }
}
