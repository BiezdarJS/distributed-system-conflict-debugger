import { inject, Injectable } from '@angular/core';
import { Engine } from '../engine/engine';
import { scheduledOperationsMock } from '../_mock/scheduled-operations.mock';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';

@Injectable({
  providedIn: 'root',
})
export class SimulationFacade {
  private engine = inject(Engine);

  public startSimulation(scheduledOperationsMock: ScheduledOperation[]): void {
    this.engine.executeTasksInOrder(scheduledOperationsMock).subscribe();
  }
}
