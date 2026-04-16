import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'ds-client-panel',
  imports: [],
  templateUrl: './client-panel.html',
  styleUrl: './client-panel.scss',
})
export class ClientPanel {
  public readonly client: InputSignal<string> = input('');
}
