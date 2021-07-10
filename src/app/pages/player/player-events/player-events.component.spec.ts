import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEventsComponent } from './player-events.component';

describe('PlayerEventsComponent', () => {
  let component: PlayerEventsComponent;
  let fixture: ComponentFixture<PlayerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
