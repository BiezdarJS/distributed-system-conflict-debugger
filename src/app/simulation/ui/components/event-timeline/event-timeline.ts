import { Component, computed, inject } from '@angular/core';
import { PendingOperationsList } from './pending-operations-list/pending-operations-list';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectTimelineEntries } from '../../../state/selectors/timeline.selector';

@Component({
  selector: 'ds-event-timeline',
  imports: [PendingOperationsList],
  templateUrl: './event-timeline.html',
  styleUrl: './event-timeline.scss',
})
export class EventTimeline {
  private readonly store = inject(Store);

  readonly timelineEntries = toSignal(this.store.select(selectTimelineEntries), {
    initialValue: [],
  });

  readonly timelineEvents = computed(() =>
    this.timelineEntries().map((timelineEntry) => timelineEntry.event),
  );
}
