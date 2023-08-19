import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFatherComponent } from './modal-father.component';

describe('ModalFatherComponent', () => {
  let component: ModalFatherComponent;
  let fixture: ComponentFixture<ModalFatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFatherComponent]
    });
    fixture = TestBed.createComponent(ModalFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
