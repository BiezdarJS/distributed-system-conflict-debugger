import {
  Component,
  computed,
  ElementRef,
  input,
  InputSignal,
  OnInit,
  output,
  OutputEmitterRef,
  signal,
  Signal,
  viewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientTypeLabels } from '@shared/consts/client-type-label.const';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { UserActionInput } from '@shared/models/event/user-action-input.type';
import { DsIconsComponent } from '@shared/ui/ds-icons/ds-icons.component';
import { InputShared } from '@shared/ui/input-shared/input-shared';
import { TextareaShared } from '@shared/ui/textarea-shared/textarea-shared';
import { debounceTime, filter } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

type UserInteractionEventLog = {
  type: 'EDITING_STARTED' | 'EDITING_CHANGED' | 'EDITING_STOPPED';
  source: ClientTypeEnum;
  value: string;
  timestamp: number;
};

@Component({
  selector: 'ds-client-panel',
  imports: [InputShared, TextareaShared, DsIconsComponent, DatePipe, ReactiveFormsModule],
  templateUrl: './client-panel.html',
  styleUrl: './client-panel.scss',
})
export class ClientPanel implements OnInit {
  readonly client: InputSignal<ClientTypeEnum | null> = input<ClientTypeEnum | null>(null);
  readonly userActionInput: OutputEmitterRef<UserActionInput> = output();

  readonly titleElement = viewChild<ElementRef>('titleElement');

  readonly clientInitialValue: Signal<string> = computed(() => {
    const client = this.client();

    if (client === null) {
      return '';
    }
    return this.clientTypeLabels[client]?.split(' ').at(-1) ?? '';
  });

  userActions = signal<UserInteractionEventLog[]>([]);

  readonly title = new FormControl('', { nonNullable: true, updateOn: 'change' });
  readonly description = new FormControl('', { nonNullable: true });

  readonly clientTypeLabels = ClientTypeLabels;

  constructor() {
    toObservable(this.userActions).subscribe((data: any) => console.log(data));
  }

  ngOnInit(): void {
    this.title.valueChanges
      .pipe(
        debounceTime(300),
        filter((inputValue) => !!inputValue),
      )
      .subscribe((inputValue) => {
        const client = this.client();

        if (client === null) {
          return;
        }
      });
  }

  startEditing(): void {
    const client = this.client();

    if (client === null) {
      return;
    }

    this.userActions.update((state) => {
      return [
        ...state,
        {
          type: 'EDITING_STARTED',
          source: client,
          value: 'Edytuje tytuł...',
          timestamp: new Date().getTime(),
        },
      ];
    });
  }

  endEditing(): void {
    const client = this.client();

    if (client === null) {
      return;
    }

    this.userActions.update((state) => {
      return [
        ...state,
        {
          type: 'EDITING_CHANGED',
          source: client,
          value: 'Zapisano',
          timestamp: new Date().getTime(),
        },
      ];
    });

    this.userActionInput.emit({
      type: 'UPDATE_TITLE',
      value: this.title.getRawValue(),
      source: client,
    });
  }
}
