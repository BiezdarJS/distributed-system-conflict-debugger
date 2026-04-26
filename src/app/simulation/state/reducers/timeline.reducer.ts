import { createAction, createReducer, on, props } from '@ngrx/store';
import { TimelineEntry } from '@shared/models/event/timeline-entry.model';

const initialState: TimelineEntry[] = [];

// const initialState: TimelineEntry[] = [
//   {
//     event: {
//       id: 'string',
//       type: 'UPDATE_TITLE',
//       payload: {
//         value: 'string',
//       },
//       source: 'A',
//       createdAt: 0,
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
    createAction('[Timeline Event] Add Timeline Entry]', props<{ timelineEntry: TimelineEntry }>()),
    (state: TimelineEntry[], { timelineEntry }) => [
      ...state,
      {
        event: timelineEntry.event,
        state: timelineEntry.state,
      },
    ],
  ),
);
