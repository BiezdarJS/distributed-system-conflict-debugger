import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledOperation } from './scheduled-operation';

describe('ScheduledOperation', () => {
  let component: ScheduledOperation;
  let fixture: ComponentFixture<ScheduledOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledOperation],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduledOperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
