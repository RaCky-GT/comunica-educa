import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGestionComponent } from './add-gestion.component';

describe('AddGestionComponent', () => {
  let component: AddGestionComponent;
  let fixture: ComponentFixture<AddGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddGestionComponent]
    });
    fixture = TestBed.createComponent(AddGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
