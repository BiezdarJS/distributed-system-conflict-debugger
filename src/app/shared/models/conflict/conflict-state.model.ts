export type ConflictState = {
  status: 'NONE' | 'DETECTED' | 'RESOLVED';
  field: 'title' | 'description';
  entries: [ConflictEntry, ConflictEntry] | null;
};

export type ConflictEntry = {
  eventId: string;
  source: 'A' | 'B';
  value: string;
  createdAt: number;
};
