import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectTimelineEntries } from '../../../../state/selectors/timeline.selector';
import { PendingOperation } from '../pending-operation/pending-operation';
import { NgClass } from '@angular/common';
import { UserIntentEvent } from '@shared/models/event/user-intent-event.model';

@Component({
  selector: 'ul[ds-pending-operations-list]',
  imports: [PendingOperation, NgClass],
  templateUrl: './pending-operations-list.html',
  styleUrl: './pending-operations-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendingOperationsList {
  readonly pendingOperationsList = input.required<UserIntentEvent[]>();
}
