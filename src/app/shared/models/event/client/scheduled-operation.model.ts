import { ClientTypeEnum } from '@shared/enums/client-type.enum';

export type ScheduledOperation = {
  event: UserIntentEvent;
  state: ProcessingState;
};

export type UserIntentEvent = {
  id: string;
  type: 'UPDATE_TITLE' | 'UPDATE_DESCRIPTION';
  payload: {
    value: string;
  };
  source: ClientTypeEnum;
  baseVersion: number;
  logicalTimestamp: number;
};

export type ProcessingState = {
  status:
    | 'QUEUED'
    | 'DISPATCHED'
    | 'IN_FLIGHT'
    | 'DELIVERED'
    | 'PROCESSED'
    | 'CONFLICTED'
    | 'RESOLVED';
  delay?: number;
  receivedAt?: number;
  processedAt?: number;
};
