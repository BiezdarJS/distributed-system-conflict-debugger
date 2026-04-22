import { Config } from './config.model';
import { ConflictState } from './conflict/conflict-state.model';
import { TimelineEntry } from './event/timeline-entry.model';
import { DocumentState } from './server/document-state.model';

export type ConflictDebuggerState = {
  config: Config;

  simulation: {
    status: SimulationStatus;
  };

  timeline: TimelineEntry[];

  server: {
    document: DocumentState;
  };

  conflict: ConflictState | null;

  resolution?: {
    strategy: 'LWW' | 'MERGE' | 'REJECT' | 'CRDT';
    result: ResolutionResult;
  };
};

export type SimulationStatus = 'IDLE' | 'RUNNING' | 'PAUSED' | 'CONFLICT_DETECTED' | 'RESOLVED';
