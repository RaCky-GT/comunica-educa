import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import {ref, Storage, uploadBytes, getDownloadURL} from '@angular/fire/storage';

import { Professors } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProfessorsService {
  private firestore = inject(Firestore);
  private storage = inject(Storage);

  private _currentProfessor = signal<Professors | null>(null);
  public currentProfessor = computed(() => this._currentProfessor());

  setCurrentProfessor(professor: Professors | null) {
    this._currentProfessor.set(professor);
  }

  addProfessors(professor: Professors, file?: File): any {
    if (file) {
      const filePath = `professors/${file.name}`;
      const fileRef = ref(this.storage, filePath);

      uploadBytes(fileRef, file).then(async () => {
        const fileUrl = await this.getDoc(filePath);
        professor.fileUrl = fileUrl;

        const professorsRef = collection(this.firestore, 'professors');
        return addDoc(professorsRef, professor);
      }).catch(error => console.log(error));
    } else {
      const professorsRef = collection(this.firestore, 'professors');
      return addDoc(professorsRef, professor);
    }
  }

  getProfessors(): Observable<Professors[]> {
    const professorsRef = collection(this.firestore, 'professors');
    return collectionData(professorsRef, { idField: 'id' }) as Observable<
      Professors[]
    >;
  }

  deleteProfessor(professor: Professors) {
    const professorsRef = doc(this.firestore, `professors/${professor.id}`);
    return deleteDoc(professorsRef);
  }

  updateProfessor(professor: Professors, file?: File): any {
    if (file) {
      const filePath = `professors/${file.name}`;
      const fileRef = ref(this.storage, filePath);

      uploadBytes(fileRef, file).then(async () => {
        const fileUrl = await this.getDoc(filePath);
        professor.fileUrl = fileUrl;

        const professorsRef = doc(this.firestore, `professors/${professor.id}`);
        return setDoc(professorsRef, professor);
      }).catch(error => console.log(error));
    } else {
      const professorsRef = doc(this.firestore, `professors/${professor.id}`);
      return setDoc(professorsRef, professor);
    }
  }

  private async getDoc(name: string) {
    const docRef = ref(this.storage, name);
    const url = await getDownloadURL(docRef);
    return url;
  }
}
