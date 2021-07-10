import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAttendanceComponent } from './player-attendance.component';

describe('PlayerAttendanceComponent', () => {
  let component: PlayerAttendanceComponent;
  let fixture: ComponentFixture<PlayerAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
