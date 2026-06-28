import type { StorageProvider } from "@/lib/storage/types";

export const mongoStorage: StorageProvider = {
  async saveLead() {
    throw new Error("MongoDB storage is not implemented yet. Set STORAGE_PROVIDER=discord for now.");
  },
  async saveSystemLog() {
    throw new Error("MongoDB storage is not implemented yet. Set STORAGE_PROVIDER=discord for now.");
  }
};
