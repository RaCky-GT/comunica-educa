import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';

import { Students } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private firestore = inject(Firestore);

  addStudents(student: Students) {
    const studentRef = collection(this.firestore, 'students');
    return addDoc(studentRef, student);
  }

  getStudents(): Observable<Students[]> {
    const studentRef = collection(this.firestore, 'students');
    return collectionData(studentRef, {idField: 'id'}) as Observable<Students[]>;
  }
}
