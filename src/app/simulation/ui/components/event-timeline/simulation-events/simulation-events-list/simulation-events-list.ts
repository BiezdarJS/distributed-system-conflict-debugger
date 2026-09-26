import { Component, input } from '@angular/core';
import { SimulationEvent as SimulationEventComponent } from '../simulation-event/simulation-event';
import { SimulationEvent } from '@shared/models/event/client/simulation-event.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ul[ds-simulation-events-list]',
  imports: [SimulationEventComponent, NgClass],
  templateUrl: './simulation-events-list.html',
  styleUrl: './simulation-events-list.scss',
})
export class SimulationEventsList {
  readonly simulationEventsList = input.required<SimulationEvent[]>();
}
