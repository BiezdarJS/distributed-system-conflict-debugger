export type ProcessingState = {
  status:
    | 'QUEUED'
    | 'DISPATCHED'
    | 'IN_FLIGHT'
    | 'DELIVERED'
    | 'PROCESSED'
    | 'CONFLICTED'
    | 'RESOLVED';
  delay?: number;
  receivedAt?: number;
  processedAt?: number;
};
