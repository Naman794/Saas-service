import { ArrowUpRight, LineChart, Users2, Workflow } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import LeadForm from "@/components/lead-form";

const studies = [
  { title: "Community Growth Systems", icon: Users2, text: "Architecture for roles, onboarding, moderation, events and recurring engagement." },
  { title: "Creator Ecosystem Operations", icon: LineChart, text: "Systems for creator tracking, performance, monetization and campaign execution." },
  { title: "Website + Automation Stack", icon: Workflow, text: "Conversion-focused pages connected to lead scoring and Discord webhook routing." }
];

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">Case Studies</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">Proof-focused system examples without fake claims.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">This page is ready for real case studies as soon as you collect project proof, screenshots and verified outcomes.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {studies.map((study) => {
            const Icon = study.icon;
            return (
              <div key={study.title} className="glass rounded-[2rem] p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-neon/10 text-neon"><Icon size={24} /></div>
                <h2 className="mt-6 text-2xl font-black">{study.title}</h2>
                <p className="mt-4 leading-7 text-white/55">{study.text}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neon">Add real project proof <ArrowUpRight size={16} /></p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Build your case study" title="Start a project that can become proof." center />
        <div className="mt-10"><LeadForm sourcePage="case-studies" /></div>
      </section>
    </PageShell>
  );
}
