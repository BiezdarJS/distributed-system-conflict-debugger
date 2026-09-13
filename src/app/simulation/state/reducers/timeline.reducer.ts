import { createAction, createReducer, on, props } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';
import { SimulationEvent } from '@shared/models/event/client/simulation-event.model';

const initialStateForScheduledOperation: ScheduledOperation[] = [];
const initialStateForSimulationTimeline: SimulationEvent[] = [];

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

export const simulationTimelineReducer = createReducer(
  initialStateForSimulationTimeline,
  on(
    createAction(
      '[Simulation Timeline Event] Add Simulation Timeline Entry]',
      props<{ simulationEvent: SimulationEvent }>(),
    ),
    (state: SimulationEvent[], { simulationEvent }) => [
      ...state,
      {
        id: simulationEvent.id,
        type: simulationEvent.type,
        logicalTimestamp: simulationEvent.logicalTimestamp,
        source: simulationEvent.source,
        operationId: simulationEvent.id,
      },
    ],
  ),
);
