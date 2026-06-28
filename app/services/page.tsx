import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import LeadForm from "@/components/lead-form";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">Services</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">One studio for your website, backend, community and automation stack.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Choose one service or combine multiple into a complete operating system.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} icon={service.icon as never} label={service.label} short={service.short} href={`/services/${service.slug}`} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <SectionHeading eyebrow="How requests work" title="Every service request is routed like a system event." text="The form captures your requirements, scores priority, sends a clean record to Discord and keeps the structure ready for MongoDB migration later." />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Capture", "Validate", "Route", "Follow up"].map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-neon">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Project request" title="Tell us which system you need." center />
        <div className="mt-10"><LeadForm sourcePage="services" /></div>
      </section>
    </PageShell>
  );
}
