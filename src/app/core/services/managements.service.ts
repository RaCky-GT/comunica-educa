import { Injectable, computed, inject, signal } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

import { Managements } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ManagementsService {
  private firestore = inject(Firestore);

  private _currentManagement = signal<Managements | null>(null);
  public currentManagement = computed(() => this._currentManagement());

  setCurrentManagement(management: Managements | null) {
    this._currentManagement.set(management);
  }

  addManagements(management: Managements) {
    const managementsRef = collection(this.firestore, 'managements');
    return addDoc(managementsRef, management);
  }

  getManagements(): Observable<Managements[]> {
    const managementsRef = collection(this.firestore, 'managements');
    return collectionData(managementsRef, { idField: 'id' }) as Observable<
      Managements[]
    >;
  }

  getManagement(id: string): Observable<Managements[]> {
    const managementsRef = collection(this.firestore, `managements/${id}`);
    return collectionData(managementsRef, { idField: id }) as Observable<
      Managements[]
    >;
  }

  deleteManagement(management: Managements) {
    const managementsRef = doc(this.firestore, `managements/${management.id}`);
    return deleteDoc(managementsRef);
  }

  updateManagement(management: Managements) {
    const managementsRef = doc(this.firestore, `managements/${management.id}`);
    return setDoc(managementsRef, management);
  }
}
