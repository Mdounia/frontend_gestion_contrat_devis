import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneProduitContratComponent } from './ligne-produit-contrat.component';

describe('LigneProduitContratComponent', () => {
  let component: LigneProduitContratComponent;
  let fixture: ComponentFixture<LigneProduitContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneProduitContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneProduitContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
