import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasoComponent } from './list-paso.component';

describe('ListPasoComponent', () => {
  let component: ListPasoComponent;
  let fixture: ComponentFixture<ListPasoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListPasoComponent]
    });
    fixture = TestBed.createComponent(ListPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
