import { Component, input, InputSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { InputShared } from '@shared/ui/input-shared/input-shared';

@Component({
  selector: 'ds-client-panel',
  imports: [InputShared, ReactiveFormsModule],
  templateUrl: './client-panel.html',
  styleUrl: './client-panel.scss',
})
export class ClientPanel {
  public readonly client: InputSignal<ClientTypeEnum | null> = input<ClientTypeEnum | null>(null);

  public readonly test = new FormControl('joł');
}
