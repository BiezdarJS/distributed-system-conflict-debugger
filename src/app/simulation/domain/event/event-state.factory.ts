import { Store } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';
import { SimulationEvent } from '@shared/models/event/client/simulation-event.model';
import { UserActionInput } from '@shared/models/event/client/user-action-input.type';
import { Observable, of, delay, tap } from 'rxjs';

export function createNewTimelineEvent(payload: UserActionInput): ScheduledOperation {
  return {
    event: {
      id: crypto.randomUUID(),
      type: payload.type,
      payload: {
        value: payload.value,
      },
      source: payload.source,
      baseVersion: 1,
      logicalTimestamp: Date.now(),
    },
    state: {
      status: 'QUEUED',
    },
  };
}

// export function

export function createDispatched$(
  operation: ScheduledOperation,
  store: Store,
): Observable<SimulationEvent> {
  return of({
    id: crypto.randomUUID(),
    type: 'OPERATION_DISPATCHED',
    logicalTimestamp: operation.event.logicalTimestamp,
    source: operation.event.source,
    operationId: operation.event.id,
  } satisfies SimulationEvent).pipe(
    delay(operation.event.logicalTimestamp),
    tap((simulationEventDispatched) => {
      store.dispatch({
        type: '[Simulation Timeline Event] Operation Dispatched]',
        simulationEventDispatched,
      });
    }),
  );
}

export function createInFlight$(
  operation: SimulationEvent,
  store: Store,
): Observable<SimulationEvent> {
  return of({
    id: crypto.randomUUID(),
    type: 'OPERATION_IN_FLIGHT',
    logicalTimestamp: 2000,
    source: operation.source,
    operationId: operation.id,
  } satisfies SimulationEvent).pipe(
    delay(operation.logicalTimestamp),
    tap((simulationEventInFlight) => {
      store.dispatch({
        type: '[Simulation Timeline Event] Operation In Flight]',
        simulationEventInFlight,
      });
    }),
  );
}
