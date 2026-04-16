import { Component } from '@angular/core';
import { ClientPanel } from '../../components/client-panel/client-panel';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { EventTimeline } from '../../components/event-timeline/event-timeline';

@Component({
  selector: 'ds-ui-page',
  imports: [ClientPanel, EventTimeline],
  templateUrl: './ui-page.html',
  styleUrl: './ui-page.scss',
})
export class UiPage {
  public readonly ClientTypeEnum = ClientTypeEnum;
}
