import { ConflictState } from './conflict/conflict-state.model';
import { ResolutionState } from './conflict/resolution-state.model';
import { ScheduledOperation } from './event/client/scheduled-operation.model';
import { SimulationEvent } from './event/client/simulation-event.model';
import { ServerLogEntry } from './event/server/server-log-entry.model';
import { DocumentState } from './server/document-state.model';
import { ViewMode } from './ui/view-mode.model';

export type ConflictDebuggerState = {
  ui: {
    viewMode: ViewMode;
  };

  // Zdarzenia w Pending Queue w Event Timeline
  scheduledOperations: ScheduledOperation[];
  // Zdarzenia w EVENTS w Event Timeline
  simulationTimeline: SimulationEvent[];

  server: {
    document: DocumentState;
    // Logi eventów w Event Timeline
    log: ServerLogEntry[];
  };

  // Global Ephemeral events that conflict
  conflict: ConflictState | null;
  // Global Ephemeral events that concern resolution
  resolution: ResolutionState | null;
};

export type SimulationStatus = 'IDLE' | 'RUNNING' | 'PAUSED' | 'CONFLICT_DETECTED' | 'RESOLVED';
