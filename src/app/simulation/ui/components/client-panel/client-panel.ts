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
import { filter, Subject } from 'rxjs';
import { DatePipe, NgClass } from '@angular/common';
import { ClientBadgePipe } from '@shared/pipes/client-badge-pipe';

type UserInteractionEventLog = {
  type: 'EDITING_STARTED' | 'EDITING_CHANGED' | 'EDITING_STOPPED';
  source: ClientTypeEnum;
  value: string;
  timestamp: number;
};

@Component({
  selector: 'ds-client-panel',
  imports: [
    NgClass,
    InputShared,
    TextareaShared,
    DsIconsComponent,
    DatePipe,
    ClientBadgePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './client-panel.html',
  styleUrl: './client-panel.scss',
})
export class ClientPanel implements OnInit {
  readonly client: InputSignal<ClientTypeEnum> = input.required<ClientTypeEnum>();
  readonly userActionInput: OutputEmitterRef<UserActionInput> = output();

  readonly titleElement = viewChild<ElementRef>('titleElement');

  refreshTrigger$ = new Subject<void>();

  // userActions contains all the actions logged in client-panel box
  userActions = signal<UserInteractionEventLog[]>([]);
  lastTitleValue = signal<string>('');

  readonly title = new FormControl('', { nonNullable: true });
  readonly description = new FormControl('', { nonNullable: true });

  readonly clientTypeLabels = ClientTypeLabels;
  readonly clientTypeEnum = ClientTypeEnum;

  ngOnInit(): void {
    this.initializeTitleUpdateStream();
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
    this.refreshTrigger$.next();
  }

  private initializeTitleUpdateStream() {
    this.refreshTrigger$
      .pipe(
        filter(() => {
          const newTitleValue = this.title.getRawValue();
          return newTitleValue !== this.lastTitleValue();
        }),
      )
      .subscribe(() => {
        const client = this.client();
        if (client === null) {
          return;
        }

        this.userActions.update((localState) => {
          return [
            ...localState,
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

        this.lastTitleValue.set(this.title.getRawValue());
      });
  }
}
