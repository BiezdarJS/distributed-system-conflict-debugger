import {
  Component,
  computed,
  output,
  OutputEmitterRef,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-input-shared',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputShared,
      multi: true,
    },
  ],
  templateUrl: './input-shared.html',
  styleUrl: './input-shared.scss',
})
export class InputShared implements ControlValueAccessor {
  private _currentValue: WritableSignal<string> = signal('');
  public currentValue: Signal<string> = computed(() => this._currentValue());
  private onChange = (value: string) => {};
  private onTouched = (value: string) => {};

  emitFocusEvent: OutputEmitterRef<void> = output();
  emitBlurEvent: OutputEmitterRef<void> = output();

  onFocus() {
    this.emitFocusEvent.emit();
  }

  onBlur() {
    this.emitBlurEvent.emit();
  }

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
