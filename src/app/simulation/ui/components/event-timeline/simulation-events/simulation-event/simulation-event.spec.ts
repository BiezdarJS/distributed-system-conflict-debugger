import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationEvent } from './simulation-event';

describe('SimulationEvent', () => {
  let component: SimulationEvent;
  let fixture: ComponentFixture<SimulationEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
