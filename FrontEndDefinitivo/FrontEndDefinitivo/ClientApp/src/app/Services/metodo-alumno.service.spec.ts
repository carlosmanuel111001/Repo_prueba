import { TestBed } from '@angular/core/testing';

import { MetodoAlumnoService } from './metodo-alumno.service';

describe('MetodoAlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetodoAlumnoService = TestBed.get(MetodoAlumnoService);
    expect(service).toBeTruthy();
  });
});
