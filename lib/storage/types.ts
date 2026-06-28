export type LeadRecord = Record<string, unknown> & {
  leadId: string;
  serviceType: string;
  priority: string;
};

export type SystemLog = {
  event: string;
  payload: unknown;
};

export type StorageProvider = {
  saveLead: (lead: LeadRecord) => Promise<void>;
  saveSystemLog: (log: SystemLog) => Promise<void>;
};
