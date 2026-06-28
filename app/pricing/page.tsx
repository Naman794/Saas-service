import { CheckCircle2 } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import LeadForm from "@/components/lead-form";
import { packages } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">Pricing</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">Packages for different stages of your system.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Start small or build a complete infrastructure layer across website, community, backend and automation.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <div key={item.name} className={`rounded-[2rem] border p-7 ${item.popular ? "border-neon/40 bg-neon/10 green-glow" : "border-white/10 bg-white/[0.04]"}`}>
              {item.popular && <p className="mb-4 inline-flex rounded-full bg-neon px-3 py-1 text-xs font-bold text-black">Recommended</p>}
              <h2 className="text-2xl font-black">{item.name}</h2>
              <p className="mt-4 text-4xl font-black text-neon">{item.price}</p>
              <p className="mt-5 leading-7 text-white/58">{item.text}</p>
              <div className="mt-8 space-y-4">
                {item.features.map((feature) => <div key={feature} className="flex gap-3 text-white/70"><CheckCircle2 size={18} className="mt-0.5 text-neon" />{feature}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Custom quote" title="Need a custom system scope?" center />
        <div className="mt-10"><LeadForm sourcePage="pricing" /></div>
      </section>
    </PageShell>
  );
}
