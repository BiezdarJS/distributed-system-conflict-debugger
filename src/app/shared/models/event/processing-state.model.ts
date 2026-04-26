export type ProcessingState = {
  status: 'QUEUED' | 'IN_FLIGHT' | 'DELIVERED' | 'CONFLICT' | 'RESOLVED';
  delay?: number;
  receivedAt?: number;
  processedAt?: number;
};
