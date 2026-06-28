"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { ServiceType } from "@/lib/site-data";

const serviceTypes: { label: string; value: ServiceType }[] = [
  { label: "Community Systems", value: "community" },
  { label: "Website & SaaS Builds", value: "website" },
  { label: "Backend Systems", value: "backend" },
  { label: "Automation Workflows", value: "automation" },
  { label: "Growth Consulting", value: "consulting" },
  { label: "System Audit", value: "audit" }
];
const budgets = ["Under ₹25K", "₹25K–₹50K", "₹50K–₹1L", "₹1L+", "Not sure yet"];
const timelines = ["ASAP", "7 days", "2–4 weeks", "1–2 months", "Flexible"];

export default function LeadForm({ initialService = "website", sourcePage = "homepage" }: { initialService?: ServiceType; sourcePage?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok) {
      setStatus("error");
      setMessage(data.error || "Something went wrong.");
      return;
    }

    setStatus("success");
    setMessage(`Lead captured. Reference: ${data.leadId || "submitted"}`);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-[2rem] p-5 green-glow md:grid-cols-2 md:p-8">
      <input className="input" name="name" placeholder="Your name" required />
      <input className="input" name="email" type="email" placeholder="Email" required />
      <input className="input" name="phone" placeholder="WhatsApp / phone" />
      <input className="input" name="company" placeholder="Company / brand" />
      <input className="input md:col-span-2" name="websiteOrSocial" placeholder="Website, Instagram, LinkedIn or Discord link" />

      <select className="input" name="serviceType" required defaultValue={initialService}>
        {serviceTypes.map((service) => <option key={service.value} value={service.value}>{service.label}</option>)}
      </select>

      <select className="input" name="budgetRange" required defaultValue="">
        <option value="" disabled>Budget range</option>
        {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
      </select>

      <select className="input" name="timeline" required defaultValue="">
        <option value="" disabled>Timeline</option>
        {timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
      </select>

      <select className="input" name="preferredContactMethod" defaultValue="WhatsApp">
        <option>WhatsApp</option>
        <option>Email</option>
        <option>Call</option>
        <option>Discord</option>
      </select>

      <textarea className="input min-h-36 md:col-span-2" name="projectDetails" placeholder="Explain what you want to build, current problem, must-have features and expected outcome." required />
      <input className="hidden" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="sourcePage" value={sourcePage} />

      <button disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-black transition hover:bg-emerald-300 md:col-span-2">
        {status === "loading" ? "Submitting..." : "Submit Project Request"} <Send size={18} />
      </button>

      {message && <p className={`md:col-span-2 ${status === "success" ? "text-emerald-300" : "text-red-300"}`}>{message}</p>}
    </form>
  );
}
