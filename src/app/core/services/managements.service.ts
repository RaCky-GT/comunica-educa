import { Injectable, computed, inject, signal } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  getDoc,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

import { Managements, Request } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ManagementsService {
  private firestore = inject(Firestore);

  private _currentManagement = signal<Managements | null>(null);
  public currentManagement = computed(() => this._currentManagement());

  private _currentRequest = signal<Request | null>(null);
  public currentRequest = computed(() => this._currentRequest());

  setCurrentManagement(management: Managements | null) {
    this._currentManagement.set(management);
  }

  setCurrentRequest(request: Request | null) {
    this._currentRequest.set(request);
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

  getRequest(id: string): Observable<Request[]> {
    const managementsRef = collection(this.firestore, `managements/${id}/request`);
    return collectionData(managementsRef, { idField: 'id' }) as Observable<
      Request[]
    >;
  }

  addRequest(management: Request, id: string) {
    const managementsRef = collection(this.firestore, `managements/${id}/request`);
    return addDoc(managementsRef, management);
  }

  deleteManagement(management: Managements) {
    const managementsRef = doc(this.firestore, `managements/${management.id}`);
    return deleteDoc(managementsRef);
  }

  deleteRequest(request: Request, id: string) {
    const managementsRef = doc(this.firestore, `managements/${id}/request/${request.id}`);
    return deleteDoc(managementsRef);
  }

  updateManagement(management: Managements) {
    const managementsRef = doc(this.firestore, `managements/${management.id}`);
    return setDoc(managementsRef, management);
  }

  updateRequest(request : Request, id: string) {
    const managementsRef = doc(this.firestore, `managements/${id}/request/${request.id}`);
    return setDoc(managementsRef, request);
  }
}
