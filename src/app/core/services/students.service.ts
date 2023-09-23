import { Injectable, computed, inject, signal } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Students } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private firestore = inject(Firestore);

  private _currentStudent = signal<Students | null>(null);
  public currentStudent = computed(() => this._currentStudent());

  setCurrentStudent(student: Students | null) {
    this._currentStudent.set(student);
  }

  addStudents(student: Students) {
    const studentRef = collection(this.firestore, 'students');
    return addDoc(studentRef, student);
  }

  getStudents(): Observable<Students[]> {
    const studentRef = collection(this.firestore, 'students');
    return collectionData(studentRef, {idField: 'id'}) as Observable<Students[]>;
  }

  deleteStudent(student: Students) {
    const professorsRef = doc(this.firestore, `students/${student.id}`);
    return deleteDoc(professorsRef);
  }

  updateStudent(student: Students) {
    const studentRef = doc(this.firestore, `students/${student.id}`);
    return setDoc(studentRef, student);
  }
}
