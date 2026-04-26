import { Component, input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { UserActionInput } from '@shared/models/event/user-action-input.type';
import { InputShared } from '@shared/ui/input-shared/input-shared';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'ds-client-panel',
  imports: [InputShared, ReactiveFormsModule],
  templateUrl: './client-panel.html',
  styleUrl: './client-panel.scss',
})
export class ClientPanel implements OnInit {
  public readonly client: InputSignal<ClientTypeEnum | null> = input<ClientTypeEnum | null>(null);

  public userActionInput: OutputEmitterRef<UserActionInput> = output();

  public readonly userAction = new FormControl('', { nonNullable: true });

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
