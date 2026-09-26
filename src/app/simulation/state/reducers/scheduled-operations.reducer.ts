import { createReducer, on, createAction, props } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';

const initialStateForScheduledOperation: ScheduledOperation[] = [];

export const scheduledOperationsReducer = createReducer(
  initialStateForScheduledOperation,
  on(
    createAction(
      '[Scheduled Operation Event] Add Scheduled Operation Entry]',
      props<{ scheduledOperationEntry: ScheduledOperation }>(),
    ),
    (state: ScheduledOperation[], { scheduledOperationEntry }) => [
      ...state,
      {
        event: scheduledOperationEntry.event,
        state: scheduledOperationEntry.state,
      },
    ],
  ),
);
