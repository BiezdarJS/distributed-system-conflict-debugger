import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationEventsList } from './simulation-events-list';

describe('SimulationEventsList', () => {
  let component: SimulationEventsList;
  let fixture: ComponentFixture<SimulationEventsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationEventsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationEventsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
