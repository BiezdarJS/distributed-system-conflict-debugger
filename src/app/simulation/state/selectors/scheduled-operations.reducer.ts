import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';

export const selectScheduledOperationsEntries =
  createFeatureSelector<ScheduledOperation[]>('scheduledOperations');

export const selectScheduledOperationsEvents = createSelector(
  selectScheduledOperationsEntries,
  (entries) => entries.map((item) => item.event),
);
