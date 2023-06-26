import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitasComponent } from './update-visitas.component';

describe('UpdateVisitasComponent', () => {
  let component: UpdateVisitasComponent;
  let fixture: ComponentFixture<UpdateVisitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVisitasComponent]
    });
    fixture = TestBed.createComponent(UpdateVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
