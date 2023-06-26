import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVisitasComponent } from './ver-visitas.component';

describe('VerVisitasComponent', () => {
  let component: VerVisitasComponent;
  let fixture: ComponentFixture<VerVisitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerVisitasComponent]
    });
    fixture = TestBed.createComponent(VerVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
