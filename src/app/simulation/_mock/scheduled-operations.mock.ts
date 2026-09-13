import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';

export const scheduledOperationsMock: ScheduledOperation[] = [
  {
    event: {
      id: 'event-1',
      type: 'UPDATE_TITLE',
      payload: {
        value: 'New title',
      },
      source: ClientTypeEnum.ClientA,
      baseVersion: 1,
      logicalTimestamp: 1001,
    },
    state: {
      status: 'QUEUED',
      delay: 500,
      receivedAt: Date.now(),
    },
  },
  {
    event: {
      id: 'event-2',
      type: 'UPDATE_DESCRIPTION',
      payload: {
        value: 'New description',
      },
      source: ClientTypeEnum.ClientB,
      baseVersion: 1,
      logicalTimestamp: 1002,
    },
    state: {
      status: 'IN_FLIGHT',
      receivedAt: Date.now(),
    },
  },
];
