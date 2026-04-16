import { Component, input, InputSignal } from '@angular/core';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';

@Component({
  selector: 'ds-client-panel',
  imports: [],
  templateUrl: './client-panel.html',
  styleUrl: './client-panel.scss',
})
export class ClientPanel {
  public readonly client: InputSignal<ClientTypeEnum | null> = input<ClientTypeEnum | null>(null);
}
