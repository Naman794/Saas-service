import type { LeadRecord } from "@/lib/storage/types";

export function formatLeadMessage(lead: LeadRecord) {
  const color = lead.priority === "high" ? 0xff3b30 : lead.priority === "medium" ? 0xffcc00 : 0x30d158;

  return {
    username: "SaaS Service Lead Router",
    content: `New ${lead.priority} priority lead: ${lead.leadId}`,
    embeds: [
      {
        title: `Lead ${lead.leadId}`,
        color,
        fields: [
          { name: "Service", value: String(lead.serviceType), inline: true },
          { name: "Priority", value: String(lead.priority), inline: true },
          { name: "Score", value: String(lead.score || 0), inline: true },
          { name: "Name", value: String(lead.name || "-"), inline: true },
          { name: "Email", value: String(lead.email || "-"), inline: true },
          { name: "Phone", value: String(lead.phone || "-"), inline: true },
          { name: "Budget", value: String(lead.budgetRange || "-"), inline: true },
          { name: "Timeline", value: String(lead.timeline || "-"), inline: true },
          { name: "Details", value: String(lead.projectDetails || "-").slice(0, 900) }
        ],
        description: "```json\n" + JSON.stringify(lead, null, 2).slice(0, 3000) + "\n```"
      }
    ]
  };
}
