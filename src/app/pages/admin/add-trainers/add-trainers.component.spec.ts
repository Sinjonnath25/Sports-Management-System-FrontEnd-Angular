import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainersComponent } from './add-trainers.component';

describe('AddTrainersComponent', () => {
  let component: AddTrainersComponent;
  let fixture: ComponentFixture<AddTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
