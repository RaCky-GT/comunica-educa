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

import {Managements, Request, Steps} from '../models';
import {ref, Storage, uploadBytes, getDownloadURL} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root',
})
export class ManagementsService {
  private firestore = inject(Firestore);
  private storage = inject(Storage);

  private _currentManagement = signal<Managements | null>(null);
  public currentManagement = computed(() => this._currentManagement());

  private _currentRequest = signal<Request | null>(null);
  public currentRequest = computed(() => this._currentRequest());

  private _currentStep = signal<Steps | null>(null);
  public currentStep = computed(() => this._currentStep());

  setCurrentManagement(management: Managements | null) {
    this._currentManagement.set(management);
  }

  setCurrentRequest(request: Request | null) {
    this._currentRequest.set(request);
  }

  setCurrentStep(step: Steps | null) {
    this._currentStep.set(step);
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

  getSteps(id: string, req: string): Observable<Steps[]> {
    const managementsRef = collection(this.firestore, `managements/${id}/request/${req}/steps`);
    return collectionData(managementsRef, { idField: 'id' }) as Observable<
      Steps[]
    >;
  }

  addRequest(management: Request, id: string) {
    const managementsRef = collection(this.firestore, `managements/${id}/request`);
    return addDoc(managementsRef, management);
  }

  addStep(step: Steps, id: string, req: string, file?: File) {
    if (file) {
      const filePath = `managements/${id}/request/${req}/steps/${step.id}/${file.name}`;
      const fileRef = ref(this.storage, filePath);

      uploadBytes(fileRef, file).then(async () => {
        const fileUrl = await this.getDoc(filePath);
        step.fileUrl = fileUrl;

        const managementsRef = doc(this.firestore, `managements/${id}/request/${req}/steps/${step.id}`);
        return setDoc(managementsRef, step);
      }).catch(error => console.log(error));
    }
    const managementsRef = collection(this.firestore, `managements/${id}/request/${req}/steps`);
    return addDoc(managementsRef, step);
  }

  deleteManagement(management: Managements) {
    const managementsRef = doc(this.firestore, `managements/${management.id}`);
    return deleteDoc(managementsRef);
  }

  deleteRequest(request: Request, id: string) {
    const managementsRef = doc(this.firestore, `managements/${id}/request/${request.id}`);
    return deleteDoc(managementsRef);
  }

  deleteStep(step: Steps, id: string, req: string) {
    const managementsRef = doc(this.firestore, `managements/${id}/request/${req}/steps/${step.id}`);
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

  updateStep(step : Steps, id: string, req: string, file?: File) {
    if (file) {
      const filePath = `managements/${id}/request/${req}/steps/${step.id}/${file.name}`;
      const fileRef = ref(this.storage, filePath);

      uploadBytes(fileRef, file).then(async () => {
        const fileUrl = await this.getDoc(filePath);
        step.fileUrl = fileUrl;

        const managementsRef = doc(this.firestore, `managements/${id}/request/${req}/steps/${step.id}`);
        return setDoc(managementsRef, step);
      }).catch(error => console.log(error));
    }
    const managementsRef = doc(this.firestore, `managements/${id}/request/${req}/steps/${step.id}`);
    return setDoc(managementsRef, step);
  }

  private async getDoc(name: string) {
    const docRef = ref(this.storage, name);
    const url = await getDownloadURL(docRef);
    return url;
  }
}
