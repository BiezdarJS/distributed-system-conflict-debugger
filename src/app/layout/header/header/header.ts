import { Component, inject, output } from '@angular/core';
import { ButtonShared } from '@shared/components/button-shared/button-shared';
import { SimulationFacade } from '../../../simulation/facade/simulation.facade';
import { scheduledOperationsMock } from '../../../simulation/_mock/scheduled-operations.mock';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';

@Component({
  selector: 'ds-header',
  imports: [ButtonShared],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly simulationFacade = inject(SimulationFacade);

  private readonly scheduledOperationsMock = scheduledOperationsMock;

  public handleButtonEvent() {
    this.simulationFacade.startSimulation(this.scheduledOperationsMock);
  }
}
