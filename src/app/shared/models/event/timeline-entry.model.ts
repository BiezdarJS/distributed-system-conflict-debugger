import { ProcessingState } from './processing-state.model';
import { UserIntentEvent } from './user-intent-event.model';

export type TimelineEntry = {
  event: UserIntentEvent;
  state: ProcessingState;
};
