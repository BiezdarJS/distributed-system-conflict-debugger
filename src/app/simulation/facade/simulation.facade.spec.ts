import { TestBed } from '@angular/core/testing';

import { SimulationFacade } from './simulation.facade';

describe('SimulationFacade', () => {
  let service: SimulationFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulationFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
