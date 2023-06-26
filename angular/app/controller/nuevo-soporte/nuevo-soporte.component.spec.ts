import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSoporteComponent } from './nuevo-soporte.component';

describe('NuevoSoporteComponent', () => {
  let component: NuevoSoporteComponent;
  let fixture: ComponentFixture<NuevoSoporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoSoporteComponent]
    });
    fixture = TestBed.createComponent(NuevoSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
