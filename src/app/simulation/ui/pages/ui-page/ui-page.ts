import { Component, inject, signal } from '@angular/core';
import { ClientPanel } from '../../components/client-panel/client-panel';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { createNewTimelineEvent } from '../../../domain/event/event-state.factory';
import { UserActionInput } from '@shared/models/event/user-action-input.type';
import { Store } from '@ngrx/store';
import { EventTimeline } from '../../components/event-timeline/event-timeline';

@Component({
  selector: 'ds-ui-page',
  imports: [ClientPanel, EventTimeline],
  templateUrl: './ui-page.html',
  styleUrl: './ui-page.scss',
})
export class UiPage {
  readonly ClientTypeEnum = ClientTypeEnum;

  private readonly store = inject(Store);

  buildModel(event: UserActionInput) {
    if (!event) {
      return;
    }

    const timelineEntry = createNewTimelineEvent(event);
    this.store.dispatch({
      type: '[Timeline Event] Add Timeline Entry]',
      timelineEntry,
    });
  }
}
