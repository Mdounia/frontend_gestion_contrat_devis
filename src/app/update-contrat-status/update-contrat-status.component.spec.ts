import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContratStatusComponent } from './update-contrat-status.component';

describe('UpdateContratStatusComponent', () => {
  let component: UpdateContratStatusComponent;
  let fixture: ComponentFixture<UpdateContratStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContratStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContratStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
