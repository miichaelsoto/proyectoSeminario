import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSoportesComponent } from './ver-soportes.component';

describe('VerSoportesComponent', () => {
  let component: VerSoportesComponent;
  let fixture: ComponentFixture<VerSoportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerSoportesComponent]
    });
    fixture = TestBed.createComponent(VerSoportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
