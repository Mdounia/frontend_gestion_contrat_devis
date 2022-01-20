import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsContratComponent } from './steps-contrat.component';

describe('StepsContratComponent', () => {
  let component: StepsContratComponent;
  let fixture: ComponentFixture<StepsContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
