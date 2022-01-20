import { TestBed } from '@angular/core/testing';

import { LigneProduitContratService } from './ligne-produit-contrat.service';

describe('LigneProduitContratService', () => {
  let service: LigneProduitContratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneProduitContratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
