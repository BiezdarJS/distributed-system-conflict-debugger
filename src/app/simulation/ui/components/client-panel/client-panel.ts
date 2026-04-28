import {
  Component,
  computed,
  input,
  InputSignal,
  OnInit,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientTypeLabels } from '@shared/consts/client-type-label.const';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { UserActionInput } from '@shared/models/event/user-action-input.type';
import { DsIconsComponent } from '@shared/ui/ds-icons/ds-icons.component';
import { InputShared } from '@shared/ui/input-shared/input-shared';
import { TextareaShared } from '@shared/ui/textarea-shared/textarea-shared';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'ds-client-panel',
  imports: [InputShared, TextareaShared, DsIconsComponent, ReactiveFormsModule],
  templateUrl: './client-panel.html',
  styleUrl: './client-panel.scss',
})
export class ClientPanel implements OnInit {
  public readonly client: InputSignal<ClientTypeEnum | null> = input<ClientTypeEnum | null>(null);

  public clientInitial: Signal<string> = computed(() => {
    const client = this.client();

    if (client === null) {
      return '';
    }
    return this.clientTypeLabels[client]?.split(' ').at(-1) ?? '';
  });

  public userActionInput: OutputEmitterRef<UserActionInput> = output();

  public readonly userAction = new FormControl('', { nonNullable: true });

  public readonly clientTypeLabels = ClientTypeLabels;

  ngOnInit(): void {
    this.userAction.valueChanges
      .pipe(
        debounceTime(300),
        filter((inputValue) => !!inputValue),
      )
      .subscribe((inputValue) => {
        const client = this.client();

        if (client === null) {
          return;
        }

        this.userActionInput.emit({
          type: 'UPDATE_TITLE',
          value: inputValue,
          source: client,
        });
      });
  }
}
