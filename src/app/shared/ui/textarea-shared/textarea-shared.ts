import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-textarea-shared',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaShared,
      multi: true,
    },
  ],
  templateUrl: './textarea-shared.html',
  styleUrl: './textarea-shared.scss',
})
export class TextareaShared implements ControlValueAccessor {
  private _currentValue: WritableSignal<string> = signal('');
  public currentValue: Signal<string> = computed(() => this._currentValue());
  private onChange = (value: string) => {};
  private onTouched = (value: string) => {};

  writeValue(newValue: any): void {
    if (newValue) {
      this._currentValue.set(newValue);
    }
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleInput(event: Event): void {
    const value = (event?.target as HTMLInputElement).value;
    this._currentValue.set(value);
    this.onChange(value);
  }
}
