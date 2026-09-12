import { ServerLogEventType } from './server-log-event-type.model';

export type ServerLogEntry = {
  id: string;
  type: ServerLogEventType;
  timestamp: number;
  operationId?: string;
  details?: Record<string, unknown>;
};
