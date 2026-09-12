import { ClientTypeEnum } from '@shared/enums/client-type.enum';

export type UserActionInput = {
  type: 'UPDATE_TITLE';
  value: string;
  source: ClientTypeEnum.ClientA | ClientTypeEnum.ClientB;
};
