import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';
import { UserActionInput } from '@shared/models/event/client/user-action-input.type';

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
