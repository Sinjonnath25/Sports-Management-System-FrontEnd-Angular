import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTrainersComponent } from './contact-trainers.component';

describe('ContactTrainersComponent', () => {
  let component: ContactTrainersComponent;
  let fixture: ComponentFixture<ContactTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTrainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
