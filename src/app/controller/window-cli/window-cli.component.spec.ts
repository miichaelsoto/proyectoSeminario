import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCliComponent } from './window-cli.component';

describe('WindowCliComponent', () => {
  let component: WindowCliComponent;
  let fixture: ComponentFixture<WindowCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowCliComponent]
    });
    fixture = TestBed.createComponent(WindowCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
