export type ProcessingState = {
  status: 'PENDING' | 'IN_FLIGHT' | 'DELIVERED' | 'CONFLICT' | 'RESOLVED';
  delay?: number;
  receivedAt?: number;
  processedAt?: number;
};
