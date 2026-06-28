import Link from "next/link";
import { ArrowRight, Hexagon } from "lucide-react";
import { services } from "@/lib/site-data";

const company = [
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Call", href: "/book-call" }
];

const resources = ["Community Setup Guide", "Website Build Checklist", "Backend System Checklist", "Automation Ideas", "Discord Webhook Setup"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="glass mb-14 grid gap-8 rounded-[2rem] p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">Build the system</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black md:text-5xl">Your business does not need more random tools. It needs one clean system.</h2>
          </div>
          <div className="flex items-end md:justify-end">
            <Link href="/book-call" className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-black">
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-neon/40 bg-neon/10 text-neon"><Hexagon size={18} /></span>
              SaaS Service Studio
            </div>
            <p className="mt-5 max-w-md leading-7 text-white/58">We build community systems, websites, backend workflows, automation and growth infrastructure for creators, teams, startups and digital businesses.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/55">
              Discord now. MongoDB later. Built with migration-ready architecture from day one.
            </div>
          </div>

          <FooterColumn title="Services" items={services.map((service) => ({ label: service.label, href: `/services/${service.slug}` }))} />
          <FooterColumn title="Company" items={company} />
          <div>
            <h3 className="font-semibold">Resources</h3>
            <div className="mt-5 space-y-3 text-sm text-white/55">
              {resources.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SaaS Service Studio. All rights reserved.</p>
          <p>Privacy Policy · Terms · Built for systems that scale.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-5 space-y-3 text-sm text-white/55">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block transition hover:text-neon">{item.label}</Link>
        ))}
      </div>
    </div>
  );
}
