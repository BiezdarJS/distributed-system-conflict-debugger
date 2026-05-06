import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectTimelineEntries } from '../../../state/selectors/timeline.selector';
import { NgClass } from '@angular/common';
import { ClientBadgePipe } from '@shared/pipes/client-badge-pipe';
import { ClientTypeLabels } from '@shared/consts/client-type-label.const';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';

@Component({
  selector: 'ds-event-timeline',
  imports: [NgClass, ClientBadgePipe],
  templateUrl: './event-timeline.html',
  styleUrl: './event-timeline.scss',
})
export class EventTimeline {
  private readonly store = inject(Store);

  readonly timelineEntries = toSignal(this.store.select(selectTimelineEntries), {
    initialValue: [],
  });

  readonly clientTypeLabels = ClientTypeLabels;
  readonly clientTypeEnum = ClientTypeEnum;
}
