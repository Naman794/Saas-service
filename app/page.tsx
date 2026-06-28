import { ArrowRight, Bot, Code2, Database, MessageSquare, Rocket, ShieldCheck } from "lucide-react";
import LeadForm from "@/components/lead-form";

const services = [
  { icon: MessageSquare, title: "Community Systems", text: "Discord, Reddit, Telegram and creator community setup with roles, flows, moderation and engagement loops." },
  { icon: Code2, title: "Website Builds", text: "Premium landing pages, SaaS websites, portfolios and conversion-focused service pages." },
  { icon: Database, title: "Backend Systems", text: "Dashboards, forms, lead routing, internal tools, databases and workflow architecture." },
  { icon: Bot, title: "Automation", text: "Discord alerts, webhook workflows, CRM pipelines, onboarding flows and operating systems." },
  { icon: Rocket, title: "Growth Consulting", text: "Community growth, creator ecosystems, monetization, content strategy and launch planning." },
  { icon: ShieldCheck, title: "System Audits", text: "Audit your website, community, backend, funnel or growth system and get a clear execution roadmap." }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-bg bg-grid">
      <section className="relative px-6 py-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.22),transparent_30%)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <a href="/" className="font-semibold tracking-tight">SaaS Service Studio</a>
          <div className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#lead-form">Start Project</a>
          </div>
          <a href="#lead-form" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">Book a Build Call</a>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-100">Community • Websites • Backend • Automation • Consulting</div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Build the systems behind your community, website and digital business.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">A premium build studio for founders, creators, communities and brands that need launch-ready infrastructure, backend workflows and growth systems.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lead-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-glow">Start a Project <ArrowRight size={18} /></a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90">Explore Services</a>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-5 shadow-glow">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-white/60">Live system preview</p>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Webhook active</span>
              </div>
              {[
                ["New website lead", "₹50K–₹1L • urgent timeline"],
                ["Discord alert routed", "Sent to #website-leads + #high-priority"],
                ["Backend workflow", "Lead scored, tagged and archived"],
                ["Owner action", "Ready for follow-up call"]
              ].map(([title, text]) => (
                <div key={title} className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Service stack</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">Everything needed to turn ideas into operating systems.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Build process</p>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {["Diagnose", "Architect", "Build", "Automate", "Scale"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/45">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-form" className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Start here</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Tell us what you want to build.</h2>
          <p className="mt-4 text-white/60">Your submission is validated server-side and routed to Discord channels as structured lead records.</p>
        </div>
        <LeadForm />
      </section>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-purple-300/40">
      <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 text-cyan-300"><Icon size={24} /></div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-white/60">{text}</p>
    </div>
  );
}
