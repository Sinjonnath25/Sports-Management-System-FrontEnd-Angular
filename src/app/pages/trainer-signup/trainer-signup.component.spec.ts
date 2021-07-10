import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSignupComponent } from './trainer-signup.component';

describe('TrainerSignupComponent', () => {
  let component: TrainerSignupComponent;
  let fixture: ComponentFixture<TrainerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
