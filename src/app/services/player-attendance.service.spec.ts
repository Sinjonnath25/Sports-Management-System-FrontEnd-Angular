import { TestBed } from '@angular/core/testing';

import { PlayerAttendanceService } from './player-attendance.service';

describe('PlayerAttendanceService', () => {
  let service: PlayerAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
