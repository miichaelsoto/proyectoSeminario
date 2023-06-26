import { TestBed } from '@angular/core/testing';

import { RegistarSoporteService } from './registar-soporte.service';

describe('RegistarSoporteService', () => {
  let service: RegistarSoporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistarSoporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
