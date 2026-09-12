import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PendingOperation } from '../pending-operation/pending-operation';
import { NgClass } from '@angular/common';
import { UserIntentEvent } from '@shared/models/event/client/scheduled-operation.model';

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
