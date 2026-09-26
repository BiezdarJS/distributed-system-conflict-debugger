import { createAction, createReducer, on, props } from '@ngrx/store';
import { SimulationEvent } from '@shared/models/event/client/simulation-event.model';

const initialStateForSimulationTimeline: SimulationEvent[] = [];

export const simulationTimelineReducer = createReducer(
  initialStateForSimulationTimeline,
  on(
    createAction(
      '[Simulation Timeline Event] Operation Dispatched]',
      props<{ simulationEventDispatched: SimulationEvent }>(),
    ),
    (state: SimulationEvent[], { simulationEventDispatched }) => [
      ...state,
      simulationEventDispatched,
    ],
  ),
  on(
    createAction(
      '[Simulation Timeline Event] Operation In Flight]',
      props<{ simulationEventInFlight: SimulationEvent }>(),
    ),
    (state: SimulationEvent[], { simulationEventInFlight }) => [...state, simulationEventInFlight],
  ),
);
