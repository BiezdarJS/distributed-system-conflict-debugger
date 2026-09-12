import { createAction, createReducer, on, props } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';

const initialState: ScheduledOperation[] = [];

// const initialState: TimelineEntry[] = [
//   {
//     event: {
//       id: 'string',
//       type: 'UPDATE_TITLE',
//       payload: {
//         value: 'string',
//       },
//       source: 'A',
//       logicalTimestamp: 0,
//     },
//     state: {
//       status: 'QUEUED',
//       delay: 0,
//       receivedAt: 250,
//       processedAt: 250,
//     },
//   },
// ];

export const timelineReducer = createReducer(
  initialState,
  on(
    createAction(
      '[Timeline Event] Add Timeline Entry]',
      props<{ timelineEntry: ScheduledOperation }>(),
    ),
    (state: ScheduledOperation[], { timelineEntry }) => [
      ...state,
      {
        event: timelineEntry.event,
        state: timelineEntry.state,
      },
    ],
  ),
);
