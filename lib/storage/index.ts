import { discordStorage } from "@/lib/storage/discord-storage";
import { mongoStorage } from "@/lib/storage/mongo-storage";

export function getStorage() {
  if (process.env.STORAGE_PROVIDER === "mongodb") return mongoStorage;
  return discordStorage;
}
