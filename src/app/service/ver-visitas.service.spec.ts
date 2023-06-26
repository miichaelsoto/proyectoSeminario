import { TestBed } from '@angular/core/testing';

import { VerVisitasService } from './ver-visitas.service';

describe('VerClientesService', () => {
  let service: VerVisitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerVisitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
