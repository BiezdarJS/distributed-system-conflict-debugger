import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ClientTypeLabels } from '@shared/consts/client-type-label.const';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { NgClass } from '@angular/common';
import { ClientBadgePipe } from '@shared/pipes/client-badge-pipe';
import { UserIntentEvent } from '@shared/models/event/user-intent-event.model';
import { DsIconsComponent } from '@shared/ui/ds-icons/ds-icons.component';

@Component({
  selector: 'li[ds-pending-operation]',
  imports: [NgClass, DsIconsComponent, ClientBadgePipe],
  templateUrl: './pending-operation.html',
  styleUrl: './pending-operation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendingOperation {
  readonly pendingOperationItem = input.required<UserIntentEvent>();

  readonly clientTypeLabels = ClientTypeLabels;
  readonly clientTypeEnum = ClientTypeEnum;
}
