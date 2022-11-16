import { TestBed } from '@angular/core/testing';

import { MetodoCursoService } from './metodo-curso.service';

describe('MetodoCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetodoCursoService = TestBed.get(MetodoCursoService);
    expect(service).toBeTruthy();
  });
});
