import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import LeadForm from "@/components/lead-form";
import { getService, services } from "@/lib/site-data";
import { iconMap } from "@/components/icon-map";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) return notFound();
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">{service.label}</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">{service.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/60">{service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#service-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-black">Start this service <ArrowRight size={18} /></Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white/85">All services</Link>
          </div>
        </div>
        <div className="glass rounded-[2rem] p-8 green-glow">
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-neon/10 text-neon"><Icon size={38} /></div>
          <h2 className="mt-8 text-3xl font-black">What this includes</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((item) => <Feature key={item} text={item} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Outcomes" title="Built for practical operating outcomes, not just visuals." />
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {service.outcomes.map((item) => (
            <div key={item} className="glass rounded-2xl p-5">
              <CheckCircle2 className="text-neon" />
              <h3 className="mt-4 text-lg font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <SectionHeading eyebrow="Service flow" title="How we deliver this service." text="Each project moves through diagnosis, architecture, build, automation and handover so the final output is usable immediately." />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {["Audit", "Map", "Design", "Build", "Launch"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-neon">0{index + 1}</p>
                <h3 className="mt-3 font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-form" className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Start this service" title={`Request ${service.label}.`} text="Your request will route into the relevant Discord channel with a structured lead record." center />
        <div className="mt-10"><LeadForm initialService={service.type} sourcePage={`/services/${service.slug}`} /></div>
      </section>
    </PageShell>
  );
}

function Feature({ text }: { text: string }) {
  return <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-white/75"><CheckCircle2 size={18} className="text-neon" />{text}</div>;
}
