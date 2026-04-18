export type Config = {
  viewMode: ViewMode;

  strategy: ConflictStrategy;

  latency: {
    A: number;
    B: number;
  };
};

export type ViewMode = 'UI' | 'SYSTEM';

export type ConflictStrategy = 'NONE' | 'LWW' | 'MERGE' | 'REJECT' | 'CRDT';
