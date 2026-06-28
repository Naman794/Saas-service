import type { LeadRecord } from "@/lib/storage/types";

const serviceMap: Record<string, string | undefined> = {
  community: process.env.DISCORD_WEBHOOK_COMMUNITY,
  website: process.env.DISCORD_WEBHOOK_WEBSITE,
  backend: process.env.DISCORD_WEBHOOK_BACKEND,
  consulting: process.env.DISCORD_WEBHOOK_CONSULTING,
  automation: process.env.DISCORD_WEBHOOK_AUTOMATION,
  audit: process.env.DISCORD_WEBHOOK_LEAD_DATABASE
};

export function getLeadWebhookUrls(lead: LeadRecord) {
  const urls = [
    process.env.DISCORD_WEBHOOK_ALL_SUBMISSIONS,
    process.env.DISCORD_WEBHOOK_LEAD_DATABASE,
    serviceMap[String(lead.serviceType)]
  ];

  if (lead.priority === "high") urls.push(process.env.DISCORD_WEBHOOK_HIGH_PRIORITY);
  return [...new Set(urls.filter(Boolean))] as string[];
}
