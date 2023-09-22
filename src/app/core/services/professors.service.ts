import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';

import { Professors } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  private firestore = inject(Firestore);

  addProfessors(professor: Professors) {
    const professorsRef = collection(this.firestore, 'professors');
    return addDoc(professorsRef, professor);
  }

  getProfessors(): Observable<Professors[]> {
    const professorsRef = collection(this.firestore, 'professors');
    return collectionData(professorsRef, {idField: 'id'}) as Observable<Professors[]>;
  }
}
