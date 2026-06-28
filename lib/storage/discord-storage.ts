import type { LeadRecord, StorageProvider, SystemLog } from "@/lib/storage/types";
import { sendDiscordWebhook } from "@/lib/discord/send-webhook";
import { formatLeadMessage } from "@/lib/discord/format-lead-message";
import { getLeadWebhookUrls } from "@/lib/discord/webhook-router";

export const discordStorage: StorageProvider = {
  async saveLead(lead: LeadRecord) {
    const urls = getLeadWebhookUrls(lead);
    await Promise.allSettled(
      urls.map((url) => sendDiscordWebhook(url, formatLeadMessage(lead)))
    );
  },

  async saveSystemLog(log: SystemLog) {
    const url = process.env.DISCORD_WEBHOOK_ERROR_LOGS;
    if (!url) return;
    await sendDiscordWebhook(url, {
      username: "SaaS Service Logs",
      content: `System log: ${log.event}`,
      embeds: [{
        title: log.event,
        description: "```json\n" + JSON.stringify(log.payload, null, 2).slice(0, 3500) + "\n```",
        color: 15158332
      }]
    });
  }
};
