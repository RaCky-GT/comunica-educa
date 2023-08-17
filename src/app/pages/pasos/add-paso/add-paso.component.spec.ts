import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasoComponent } from './add-paso.component';

describe('AddPasoComponent', () => {
  let component: AddPasoComponent;
  let fixture: ComponentFixture<AddPasoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddPasoComponent]
    });
    fixture = TestBed.createComponent(AddPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
