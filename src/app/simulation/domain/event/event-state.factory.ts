import { TimelineEntry } from '@shared/models/event/timeline-entry.model';
import { UserActionInput } from '@shared/models/event/user-action-input.type';

export function createNewTimelineEvent(payload: UserActionInput): TimelineEntry {
  return {
    event: {
      id: crypto.randomUUID(),
      type: payload.type,
      payload: {
        value: payload.value,
      },
      source: payload.source,
      createdAt: Date.now(),
    },
    state: {
      status: 'QUEUED',
    },
  };
}
