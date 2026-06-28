import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MessageSquare, RadioTower, ShieldCheck, Zap } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import SystemCore from "@/components/system-core";
import ServiceCard from "@/components/service-card";
import LeadForm from "@/components/lead-form";
import { packages, processSteps, services } from "@/lib/site-data";

const metrics = [
  ["150+", "Projects Delivered"],
  ["98%", "Client Satisfaction"],
  ["24/7", "Automation Running"],
  ["2M+", "Users Impacted"]
];

const problems = ["Scattered tools", "No lead tracking", "Weak community engagement", "Manual backend work", "Poor conversion pages", "No automation"];
const solutions = ["Centralized workflows", "Discord-based logging", "Growth loops", "Backend-ready logic", "Conversion-focused pages", "Automated routing"];
const liveEvents = ["Lead Captured", "Discord Alert Sent", "Workflow Triggered", "Priority Lead Routed", "Owner Notified"];

export default function Home() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-neon/25 bg-neon/10 px-4 py-2 text-sm font-medium text-neon">Build. Automate. Scale.</div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">We build. We automate. You <span className="text-neon">scale.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">Complete systems for communities, websites, backends, automation workflows and growth operations.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-call" className="inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-black transition hover:bg-emerald-300">Start a Project <ArrowRight size={18} /></Link>
            <Link href="/process" className="inline-flex items-center justify-center gap-2 rounded-full border border-neon/35 px-6 py-3 font-semibold text-neon transition hover:bg-neon/10">See How It Works</Link>
          </div>
        </div>
        <SystemCore />
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="glass grid gap-5 rounded-[2rem] p-5 md:grid-cols-4 md:p-8">
          {metrics.map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-black/20 p-6 text-center">
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm text-white/48">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="services">
        <SectionHeading eyebrow="What we build" title="Infrastructure for digital businesses that need speed, structure and scale." text="Pick one service or combine multiple into a full operating system." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} icon={service.icon as never} label={service.label} short={service.short} href={`/services/${service.slug}`} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">Before</p>
            <h2 className="mt-4 text-3xl font-black">Common problems</h2>
            <div className="mt-8 grid gap-3">
              {problems.map((item) => <Pill key={item} text={item} />)}
            </div>
          </div>
          <div className="glass rounded-[2rem] border-neon/20 p-8 green-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">After</p>
            <h2 className="mt-4 text-3xl font-black">System-based solutions</h2>
            <div className="mt-8 grid gap-3">
              {solutions.map((item) => <Pill key={item} text={item} positive />)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Live system preview" title="Make the Discord webhook flow look like a command center." text="Every submission becomes a structured record, then routes into the right Discord channels based on service type and priority." />
          <div className="glass rounded-[2rem] p-5">
            {liveEvents.map((event, index) => (
              <div key={event} className="mb-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 last:mb-0">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-neon/10 text-neon"><RadioTower size={18} /></span>
                <div className="flex-1">
                  <p className="font-semibold">{event}</p>
                  <p className="text-sm text-white/45">System event #{index + 1} routed successfully</p>
                </div>
                <span className="text-xs text-white/35">2m ago</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Process" title="A clean path from idea to operating system." center />
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.step} className="glass rounded-[1.5rem] p-5">
              <p className="text-sm text-neon">{step.step}</p>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/52">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Packages" title="Start with a focused build or go full infrastructure." text="Pricing depends on scope, integrations and timeline." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => <PricingCard key={item.name} {...item} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <SectionHeading eyebrow="Proof style" title="Designed for community, creator and growth operations." text="Use this area for real case studies as you collect more proof. For now, the cards focus on system outcomes instead of fake client claims." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Community growth systems", "Creator ecosystem ops", "Website + automation stack"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <ShieldCheck className="text-neon" />
                <h3 className="mt-4 text-lg font-bold">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-white/52">Reusable systems for visibility, conversion, routing and execution.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Start here" title="Tell us what you want to build." text="The form validates your request, scores the lead and routes it into the right Discord channel." center />
        <div className="mt-10"><LeadForm sourcePage="homepage" /></div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions before starting?" center />
        <div className="mt-10 grid gap-4">
          {[
            ["Do you only build websites?", "No. The core offer includes websites, communities, backend systems, automation and consulting."],
            ["Can this use Discord webhooks now?", "Yes. The MVP uses Discord webhooks as a temporary structured logging layer."],
            ["Can we move to MongoDB later?", "Yes. The storage layer is adapter-based so MongoDB can replace Discord storage later."],
            ["Can you build separate service pages?", "Yes. The site already includes dedicated pages for all core services."]
          ].map(([q, a]) => (
            <div key={q} className="glass rounded-2xl p-5">
              <h3 className="font-semibold">{q}</h3>
              <p className="mt-2 text-white/55">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Pill({ text, positive = false }: { text: string; positive?: boolean }) {
  return <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"><CheckCircle2 size={18} className={positive ? "text-neon" : "text-white/38"} /><span>{text}</span></div>;
}

function PricingCard({ name, price, text, features, popular }: { name: string; price: string; text: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`rounded-[1.75rem] border p-6 ${popular ? "border-neon/35 bg-neon/10 green-glow" : "border-white/10 bg-white/[0.04]"}`}>
      {popular && <p className="mb-4 inline-flex rounded-full bg-neon px-3 py-1 text-xs font-bold text-black">Most useful</p>}
      <h3 className="text-2xl font-black">{name}</h3>
      <p className="mt-3 text-3xl font-black text-neon">{price}</p>
      <p className="mt-4 min-h-16 leading-7 text-white/58">{text}</p>
      <div className="mt-6 space-y-3">
        {features.map((feature) => <div key={feature} className="flex gap-3 text-sm text-white/70"><Zap size={16} className="mt-0.5 text-neon" />{feature}</div>)}
      </div>
    </div>
  );
}
