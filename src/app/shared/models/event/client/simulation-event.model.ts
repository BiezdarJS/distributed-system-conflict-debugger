import { ClientTypeEnum } from '@shared/enums/client-type.enum';

export type SimulationEvent = {
  id: string;
  type: SimulationEventType;
  logicalTimestamp: number;
  source?: ClientTypeEnum | 'SERVER';
  operationId?: string;
};

export type SimulationEventType =
  | 'OPERATION_DISPATCHED'
  | 'OPERATION_IN_FLIGHT'
  | 'SERVER_RECEIVED'
  | 'SERVER_APPLIED'
  | 'SERVER_REJECTED'
  | 'CONFLICT_DETECTED'
  | 'RESOLUTION_STARTED'
  | 'RESOLUTION_STEP'
  | 'RESOLUTION_COMPLETED'
  | 'CLIENT_SYNC_STARTED'
  | 'CLIENT_SYNCED'
  | 'SIMULATION_COMPLETED';
