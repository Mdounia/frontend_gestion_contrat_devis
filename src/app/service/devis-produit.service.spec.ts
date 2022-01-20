import { TestBed } from '@angular/core/testing';

import { DevisProduitService } from './devis-produit.service';

describe('DevisProduitService', () => {
  let service: DevisProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
