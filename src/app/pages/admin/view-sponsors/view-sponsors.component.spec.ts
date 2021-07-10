import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSponsorsComponent } from './view-sponsors.component';

describe('ViewSponsorsComponent', () => {
  let component: ViewSponsorsComponent;
  let fixture: ComponentFixture<ViewSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSponsorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
