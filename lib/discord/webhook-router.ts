import type { LeadRecord } from "@/lib/storage/types";

const serviceMap: Record<string, string | undefined> = {
  community: process.env.DISCORD_WEBHOOK_COMMUNITY,
  website: process.env.DISCORD_WEBHOOK_WEBSITE,
  backend: process.env.DISCORD_WEBHOOK_BACKEND,
  consulting: process.env.DISCORD_WEBHOOK_CONSULTING,
  automation: process.env.DISCORD_WEBHOOK_AUTOMATION,
  audit: process.env.DISCORD_WEBHOOK_LEAD_DATABASE
};

function addUniqueWebhookUrl(list: string[], url: string | undefined) {
  if (!url) return;
  if (list.indexOf(url) === -1) list.push(url);
}

export function getLeadWebhookUrls(lead: LeadRecord) {
  const uniqueUrls: string[] = [];

  addUniqueWebhookUrl(uniqueUrls, process.env.DISCORD_WEBHOOK_ALL_SUBMISSIONS);
  addUniqueWebhookUrl(uniqueUrls, process.env.DISCORD_WEBHOOK_LEAD_DATABASE);
  addUniqueWebhookUrl(uniqueUrls, serviceMap[String(lead.serviceType)]);

  if (lead.priority === "high") {
    addUniqueWebhookUrl(uniqueUrls, process.env.DISCORD_WEBHOOK_HIGH_PRIORITY);
  }

  return uniqueUrls;
}
