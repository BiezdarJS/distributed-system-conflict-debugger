import { Component, inject, Signal } from '@angular/core';
import { ScheduledOperationsList } from './scheduled-events/scheduled-operations-list/scheduled-operations-list';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectScheduledOperationsEvents } from '../../../state/selectors/scheduled-operations.reducer';
import { UserIntentEvent } from '@shared/models/event/client/scheduled-operation.model';
import { selectSimulationEventsEntries } from '../../../state/selectors/simulation-events.selector';
import { SimulationEvent } from '@shared/models/event/client/simulation-event.model';
import { SimulationEventsList } from './simulation-events/simulation-events-list/simulation-events-list';

@Component({
  selector: 'ds-event-timeline',
  imports: [ScheduledOperationsList, SimulationEventsList],
  templateUrl: './event-timeline.html',
  styleUrl: './event-timeline.scss',
})
export class EventTimeline {
  private readonly store = inject(Store);

  readonly scheduledOperations: Signal<UserIntentEvent[]> = toSignal(
    this.store.select(selectScheduledOperationsEvents),
    {
      initialValue: [],
    },
  );

  readonly simulationEvents: Signal<SimulationEvent[]> = toSignal(
    this.store.select(selectSimulationEventsEntries),
    {
      initialValue: [],
    },
  );
}
