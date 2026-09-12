import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { SimulationEventType } from './simulation-event-type.model';

export type SimulationEvent = {
  id: string;
  type: SimulationEventType;
  timestamp: number;
  source?: ClientTypeEnum | 'SERVER';
  operationId?: string;
};
