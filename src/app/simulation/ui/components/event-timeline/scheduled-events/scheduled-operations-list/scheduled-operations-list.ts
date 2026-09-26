import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScheduledOperation } from '../scheduled-operation/scheduled-operation';
import { NgClass } from '@angular/common';
import { UserIntentEvent } from '@shared/models/event/client/scheduled-operation.model';

@Component({
  selector: 'ul[ds-scheduled-operations-list]',
  imports: [ScheduledOperation, NgClass],
  templateUrl: './scheduled-operations-list.html',
  styleUrl: './scheduled-operations-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduledOperationsList {
  readonly scheduledOperationsList = input.required<UserIntentEvent[]>();
}
