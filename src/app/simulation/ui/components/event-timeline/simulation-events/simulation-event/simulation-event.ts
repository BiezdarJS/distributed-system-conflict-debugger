import { Component, input } from '@angular/core';
import { SimulationEvent as SimulationEventType } from '@shared/models/event/client/simulation-event.model';

@Component({
  selector: 'li[ds-simulation-event]',
  imports: [],
  templateUrl: './simulation-event.html',
  styleUrl: './simulation-event.scss',
})
export class SimulationEvent {
  readonly simulationEventItem = input.required<SimulationEventType>();
}
