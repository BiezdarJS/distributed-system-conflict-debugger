import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ds-button-shared',
  imports: [],
  templateUrl: './button-shared.html',
  styleUrl: './button-shared.scss',
})
export class ButtonShared {
  public readonly textContent = input<string>('');

  public readonly pressed = output<void>();

  public onClick(): void {
    this.pressed.emit();
  }
}
