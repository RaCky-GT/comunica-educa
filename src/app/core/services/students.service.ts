import { Injectable, computed, inject, signal } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {ref, Storage, uploadBytes, getDownloadURL} from '@angular/fire/storage';

import { Students } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private firestore = inject(Firestore);
  private storage = inject(Storage);

  private _currentStudent = signal<Students | null>(null);
  public currentStudent = computed(() => this._currentStudent());

  setCurrentStudent(student: Students | null) {
    this._currentStudent.set(student);
  }

  addStudents(student: Students, file?: File): any {
    if (file) {
      const filePath = `students/${file.name}`;
      const fileRef = ref(this.storage, filePath);

      uploadBytes(fileRef, file).then(async () => {
        const fileUrl = await this.getDoc(filePath);
        student.fileUrl = fileUrl;

        const studentRef = collection(this.firestore, 'students');
        return addDoc(studentRef, student);
      }).catch(error => console.log(error));
    } else {
      const studentRef = collection(this.firestore, 'students');
      return addDoc(studentRef, student);
    }
  }

  getStudents(): Observable<Students[]> {
    const studentRef = collection(this.firestore, 'students');
    return collectionData(studentRef, {idField: 'id'}) as Observable<Students[]>;
  }

  deleteStudent(student: Students) {
    const professorsRef = doc(this.firestore, `students/${student.id}`);
    return deleteDoc(professorsRef);
  }

  updateStudent(student: Students, file?: File): any {
    if (file) {
      const filePath = `students/${file.name}`;
      const fileRef = ref(this.storage, filePath);

      uploadBytes(fileRef, file).then(async () => {
        const fileUrl = await this.getDoc(filePath);
        student.fileUrl = fileUrl;

        const studentRef = doc(this.firestore, `students/${student.id}`);
        return setDoc(studentRef, student);
      }).catch(error => console.log(error));
    } else {
      const studentRef = doc(this.firestore, `students/${student.id}`);
      return setDoc(studentRef, student);
    }
  }

  private async getDoc(name: string) {
    const docRef = ref(this.storage, name);
    const url = await getDownloadURL(docRef);
    return url;
  }
}
