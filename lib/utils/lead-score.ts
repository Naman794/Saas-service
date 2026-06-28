import type { LeadInput } from "@/lib/validation/lead-schema";

export function scoreLead(lead: LeadInput) {
  let score = 0;
  if (lead.budgetRange.includes("50K") || lead.budgetRange.includes("1L")) score += 30;
  if (["ASAP", "7 days"].includes(lead.timeline)) score += 25;
  if (["backend", "automation"].includes(lead.serviceType)) score += 25;
  if (lead.company || lead.websiteOrSocial) score += 15;
  if (lead.phone) score += 10;
  if (lead.projectDetails.length > 150) score += 10;

  const priority = score >= 60 ? "high" : score >= 30 ? "medium" : "low";
  return { score, priority };
}
