import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ClientTypeLabels } from '@shared/consts/client-type-label.const';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { NgClass } from '@angular/common';
import { ClientBadgePipe } from '@shared/pipes/client-badge-pipe';
import { DsIconsComponent } from '@shared/ui/ds-icons/ds-icons.component';
import { FormsModule } from '@angular/forms';
import { UserIntentEvent } from '@shared/models/event/client/scheduled-operation.model';

@Component({
  selector: 'li[ds-scheduled-operation]',
  imports: [FormsModule, NgClass, DsIconsComponent, ClientBadgePipe],
  templateUrl: './scheduled-operation.html',
  styleUrl: './scheduled-operation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduledOperation {
  readonly scheduledOperationItem = input.required<UserIntentEvent>();

  readonly dispatchOffset = 50;

  readonly clientTypeLabels = ClientTypeLabels;
  readonly clientTypeEnum = ClientTypeEnum;
}
