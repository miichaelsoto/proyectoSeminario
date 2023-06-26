import { TestBed } from '@angular/core/testing';

import { VerClientesService } from './ver-clientes.service';

describe('VerClientesService', () => {
  let service: VerClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
