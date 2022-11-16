import { TestBed } from '@angular/core/testing';

import { MetodoFamiliaService } from './metodo-familia.service';

describe('MetodoFamiliaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetodoFamiliaService = TestBed.get(MetodoFamiliaService);
    expect(service).toBeTruthy();
  });
});
