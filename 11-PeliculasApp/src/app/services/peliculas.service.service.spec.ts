import { TestBed } from '@angular/core/testing';

import { Peliculas.ServiceService } from './peliculas.service.service';

describe('Peliculas.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Peliculas.ServiceService = TestBed.get(Peliculas.ServiceService);
    expect(service).toBeTruthy();
  });
});
