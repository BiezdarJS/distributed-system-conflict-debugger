import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';
import { concatMap, delay, from, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Engine {
  private readonly store = inject(Store);

  public executeTasksInOrder(operationsToExecute: ScheduledOperation[]): Observable<unknown> {
    return from(operationsToExecute).pipe(
      // zwracamy SimulationEvent
      concatMap((operation) =>
        of({
          id: operation.event.id,
          type: operation.event.type,
          logicalTimestamp: operation.event.logicalTimestamp,
          source: operation.event.source,
          operationId: operation.event.id,
        }).pipe(
          delay(operation.event.logicalTimestamp),
          tap((simulationEvent) => {
            this.store.dispatch({
              type: '[Simulation Timeline Event] Add Simulation Timeline Entry]',
              simulationEvent,
            });
          }),
        ),
      ),
    );
  }
}

// czyli najpierw daję 1wszy delay

// export type SimulationEventType =
//   | 'OPERATION_DISPATCHED'
//   | 'OPERATION_IN_FLIGHT'
//   | 'SERVER_RECEIVED'
//   | 'SERVER_APPLIED'
//   | 'SERVER_REJECTED'
//   | 'CONFLICT_DETECTED'
//   | 'RESOLUTION_STARTED'
//   | 'RESOLUTION_STEP'
//   | 'RESOLUTION_COMPLETED'
//   | 'CLIENT_SYNC_STARTED'
//   | 'CLIENT_SYNCED'
//   | 'SIMULATION_COMPLETED';

// czyli zakładamy że ta metoda dostanie tablicę
// wizja końca jest taka że ten strumień powinien
// wyswietlić komunikaty w UI zgodnie z kolejnością wykonywania,
// Przykład:

// T+0
// A zostaje wysłane

// T+200
// A dociera do serwera

// T+300
// B zostaje wysłane

// T+~250
// serwer przetwarza A

// T+2400
// B dociera do serwera

// T+2450
// serwer przetwarza B
// → wykrywa konflikt
