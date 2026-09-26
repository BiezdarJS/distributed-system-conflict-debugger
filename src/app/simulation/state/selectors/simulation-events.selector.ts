import { createFeatureSelector } from '@ngrx/store';
import { SimulationEvent } from '@shared/models/event/client/simulation-event.model';

export const selectSimulationEventsEntries =
  createFeatureSelector<SimulationEvent[]>('simulationTimeline');
