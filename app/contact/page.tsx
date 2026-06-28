import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import LeadForm from "@/components/lead-form";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">Contact</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">Have a system, website or automation idea?</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Send the details and the request will route into the right Discord channel.</p>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Message" title="Share the requirement." center />
        <div className="mt-10"><LeadForm sourcePage="contact" /></div>
      </section>
    </PageShell>
  );
}
