export type UserIntentEvent = {
  id: string;
  type: 'UPDATE_TITLE' | 'UPDATE_DESCRIPTION';
  payload: {
    value: string;
  };
  source: 'A' | 'B';
  createdAt: number;
};
