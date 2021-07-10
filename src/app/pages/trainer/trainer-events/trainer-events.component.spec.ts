import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEventsComponent } from './trainer-events.component';

describe('TrainerEventsComponent', () => {
  let component: TrainerEventsComponent;
  let fixture: ComponentFixture<TrainerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
