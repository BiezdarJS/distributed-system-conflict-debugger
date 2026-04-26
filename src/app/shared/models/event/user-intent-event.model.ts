import { ClientTypeEnum } from '@shared/enums/client-type.enum';

export type UserIntentEvent = {
  id: string;
  type: 'UPDATE_TITLE' | 'UPDATE_DESCRIPTION';
  payload: {
    value: string;
  };
  source: ClientTypeEnum;
  createdAt: number;
};
