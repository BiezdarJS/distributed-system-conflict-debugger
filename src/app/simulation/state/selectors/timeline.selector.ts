import { createFeatureSelector } from '@ngrx/store';
import { ScheduledOperation } from '@shared/models/event/client/scheduled-operation.model';

export const selectScheduledOperationsEntries =
  createFeatureSelector<ScheduledOperation[]>('scheduledOperations');
