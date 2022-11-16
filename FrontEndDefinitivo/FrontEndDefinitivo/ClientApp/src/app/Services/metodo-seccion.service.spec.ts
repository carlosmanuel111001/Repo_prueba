import { TestBed } from '@angular/core/testing';

import { MetodoSeccionService } from './metodo-seccion.service';

describe('MetodoSeccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetodoSeccionService = TestBed.get(MetodoSeccionService);
    expect(service).toBeTruthy();
  });
});
