import { ClientTypeEnum } from '@shared/enums/client-type.enum';
import { ConflictStrategy } from './conflict-strategy.model';

export type ResolutionState = {
  status: 'IDLE' | 'STRATEGY_SELECTED' | 'RESOLVING' | 'RESOLVED' | 'SYNCING' | 'SYNCED';

  strategy: ConflictStrategy | null;
  result: ResolutionResult | null;

  currentStep?: ResolutionStep;
};

export type ResolutionStep = LwwResolutionStep;

export type ResolutionStepBase<TStrategy extends ConflictStrategy, TType extends string> = {
  strategy: TStrategy;
  type: TType;
};

export type LwwResolutionStep =
  | (ResolutionStepBase<'LWW', 'COMPARING_TIMESTAMPS'> & {
      timestamps: {
        A: number;
        B: number;
      };
    })
  | (ResolutionStepBase<'LWW', 'SELECTING_LATEST_OPERATION'> & {
      winner: ClientTypeEnum;
    })
  | (ResolutionStepBase<'LWW', 'DISCARDING_OLDER_OPERATION'> & {
      discarded: ClientTypeEnum;
    })
  | ResolutionStepBase<'LWW', 'PERSISTING_FINAL_STATE'>;
