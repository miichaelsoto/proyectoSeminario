import { TestBed } from '@angular/core/testing';

import { VerSoporteService } from './ver-soporte.service';

describe('VerClientesService', () => {
  let service: VerSoporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerSoporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
