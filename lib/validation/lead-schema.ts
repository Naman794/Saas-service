import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().default(""),
  company: z.string().max(120).optional().default(""),
  websiteOrSocial: z.string().max(300).optional().default(""),
  serviceType: z.enum(["community", "website", "backend", "automation", "consulting", "audit"]),
  budgetRange: z.string().min(2).max(80),
  timeline: z.string().min(2).max(80),
  preferredContactMethod: z.string().max(40).optional().default("WhatsApp"),
  projectDetails: z.string().min(20).max(3000),
  sourcePage: z.string().max(120).optional().default("unknown")
});

export type LeadInput = z.infer<typeof leadSchema>;
