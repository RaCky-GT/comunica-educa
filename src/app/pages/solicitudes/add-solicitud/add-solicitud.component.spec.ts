import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolicitudComponent } from './add-solicitud.component';

describe('AddSolicitudComponent', () => {
  let component: AddSolicitudComponent;
  let fixture: ComponentFixture<AddSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddSolicitudComponent]
    });
    fixture = TestBed.createComponent(AddSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
