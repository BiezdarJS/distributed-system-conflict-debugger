import { createFeatureSelector } from '@ngrx/store';
import { TimelineEntry } from '@shared/models/event/timeline-entry.model';

export const selectTimelineEntries = createFeatureSelector<TimelineEntry[]>('timeline');
