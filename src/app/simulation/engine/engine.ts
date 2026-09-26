import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';
import { SimulationEvent } from '@shared/models/event/client/simulation-event.model';
import { concatMap, delay, from, mergeMap, Observable, of, switchMap, tap, timer } from 'rxjs';
import { createDispatched$, createInFlight$ } from '../domain/event/event-state.factory';

@Injectable({
  providedIn: 'root',
})
export class Engine {
  private readonly store = inject(Store);

  public executeTasksInOrder(
    operationsToExecute: ScheduledOperation[],
  ): Observable<SimulationEvent> {
    return from(operationsToExecute).pipe(
      mergeMap((operation) =>
        createDispatched$(operation, this.store).pipe(
          concatMap((eventInDispatchState) => createInFlight$(eventInDispatchState, this.store)),
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
