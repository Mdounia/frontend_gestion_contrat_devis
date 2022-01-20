import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneProduitDevisComponent } from './ligne-produit-devis.component';

describe('LigneProduitDevisComponent', () => {
  let component: LigneProduitDevisComponent;
  let fixture: ComponentFixture<LigneProduitDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneProduitDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneProduitDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
