import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGestionesComponent } from './list-gestiones.component';

describe('ListGestionesComponent', () => {
  let component: ListGestionesComponent;
  let fixture: ComponentFixture<ListGestionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListGestionesComponent]
    });
    fixture = TestBed.createComponent(ListGestionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
